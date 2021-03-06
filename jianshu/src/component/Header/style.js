import styled from 'styled-components'
import logoPic from '../../static/images/logo.png';

export const HeaderWrapper = styled.div`
    position:relative;
    min-width:1300px;
    height:58px;
    border-bottom:1px solid #f0f0f0;
`

export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width: 100px;
    height:58px;
    background:url(${logoPic});
    background-size:contain;
`

export const Logo1 = styled.a.attrs({
    href:"/"
})`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width: 100px;
    height:58px;
    background:url(${logoPic});
    background-size:contain;
`

export const Nav = styled.div`
    width: 960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin:0 auto;
`

export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color: #333;
    &.left{
        float:left
    }
    &.right{
        float:right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`

export const SearchWrapper = styled.div`
 float:left;
 position:relative;
 .iconSearch{
     position:absolute;
     right:5px;
     bottom:5px;
     width: 30px;
     height:30px;
     line-height:30px;
    border-radius:50%;
    text-align:center;
    /* transition: all 0.3s; */
 }
 .spin{
    font-size:12px;
    margin-right:3px;
    display:inline-block;
    transition:all 0.2s ease-in;
    transform:rotate(0deg);
    transform-origin:center center;
 }

`

export const NavSearch = styled.input.attrs({
 placeholder:'搜索'
})`
    width:160px;
    height:38px;
    margin-top:9px;
    margin-left:20px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background-color:#eee;
    /* transition: all 0.3s; */
    font-size:14px;
    color: #666;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 240px;
        &+.iconfont{
            background:#777;
            color: #fff;
        }
    }

     &.slide-enter{
        transition:all 0.2s ease-out;
    }
    &.slide-enter-action{
        width:240px;
    }
    &.slide-exit{
        transition:all 0.2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
    
`

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`

export const Button = styled.div`
    float:right;
    line-height:38px;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color: #ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149
    }
`
export const SearchInfo = styled.div`
    position:absolute;
    background:#fff;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    box-shadow:0 0 8px rgba(0,0,0,.2)
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size:14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.div`
    float:right;
    font-size:13px;
    cursor:pointer;
    user-select:none;
`

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;