/* eslint-disable react-hooks/rules-of-hooks */
/** 
 * React Hooks
 *
 * @Author: xujun  
 * @Date: 2020-02-27 17:30:03   
 */

import React, { useState, useEffect, useRef, useCallback } from 'react'

 function LoadingButtonHooks(props){
     const timeRef = useRef(null);
     const [loading, setLoading] = useState(props.loading)
     const [btnText, setBtnText] = useState(props.btnText)
     const [totalSecond, setTotalSecond] = useState(props.totalSecond)

     const countRef = useRef(totalSecond)

     const clear = useCallback(() => {
        clearTimeout(timeRef.current)
        setLoading(false)
        setTotalSecond(props.totalSecond)
        countRef.current = props.totalSecond
      })

      const setTime = useCallback(() => {
        if (countRef.current <= 0) {
          clear()
          return
        }
        countRef.current = countRef.current - 1
        setTotalSecond(countRef.current)
        timeRef.current = setTimeout(() => {
          setTime()
        }, 1000)
      })

      const onStart = useCallback(() => {
        if (loading) return
        countRef.current = totalSecond
        setLoading(true)
        setTime()
      })

      useEffect(() => {
        return () => {
          clearTimeout(timeRef.current)
        }
      }, [])

      return (
        <button disabled={loading} onClick={onStart}>
          {!loading ? btnText : `请等待${totalSecond}秒..`}
        </button>
      )
 }

 LoadingButtonHooks.defaultProps = {
    loading: false,
    btnText: '获取验证码',
    totalSecond: 10
  }

  export default () => (
    <div>
      <LoadingButtonHooks
        loading={false}
        btnText={'获取验证码hooks1'}
        totalSecond={10}
      />
      <LoadingButtonHooks
        loading={false}
        btnText={'获取验证码hooks2'}
        totalSecond={11}
      />
    </div>
  )