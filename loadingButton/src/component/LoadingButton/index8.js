/** 
 * useHooks
 *
 * @Author: xujun  
 * @Date: 2020-02-27 17:38:35   
 */

import React, {
    useState,
    useEffect,
    useRef,
    useCallback
} from 'react'

function useLoadingTimer(initState) {

    const timeRef = useRef(null)
    const [loading, setLoading] = useState(initState.loading)
    const [btnText, setBtnText] = useState(initState.btnText)
    const [totalSecond, setTotalSecond] = useState(initState.totalSecond)
    const countRef = useRef(totalSecond)

    const clear = useCallback(() => {
        clearTimeout(timeRef.current)
        setLoading(false)
        setTotalSecond(initState.totalSecond)
        countRef.current = initState.totalSecond
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

    return {
        onStart,
        loading,
        totalSecond,
        btnText
      }

}

const LoadingButtonHooks1 = () => {
    const { onStart, loading, totalSecond, btnText } = useLoadingTimer({
      loading: false,
      btnText: '获取验证码UseHooks1',
      totalSecond: 10
    })
    return (
      <button disabled={loading} onClick={onStart}>
        {!loading ? btnText : `请等待${totalSecond}秒..`}
      </button>
    )
  }

  const LoadingButtonHooks2 = () => {
    const { onStart, loading, totalSecond, btnText } = useLoadingTimer({
      loading: false,
      btnText: '获取验证码UseHooks2',
      totalSecond: 8
    })
    return (
      <button disabled={loading} onClick={onStart}>
        {!loading ? btnText : `请等待${totalSecond}秒..`}
      </button>
    )
  }

  export default () => (
    <div>
      <LoadingButtonHooks1 />
      <LoadingButtonHooks2 />
    </div>
  )