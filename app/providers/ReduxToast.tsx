import { FC } from 'react'
import ReduxToastr from 'react-redux-toastr'

const ReduxToast: FC = () => {
	return (
		<ReduxToastr
			timeOut={4000}
			newestOnTop={false}
			preventDuplicates
			progressBar
			position="top-right"
			closeOnToastrClick
			transitionIn="fadeIn"
			transitionOut="fadeOut"
		/>
	)
}

export default ReduxToast

// TODO:
// < div className = "top-right" >
// < div >
// < div className = "toastr animated rrt-success fadeOut" role = "button" tabIndex = "0" >
// < div >
// < div className = "rrt-left-container" >
// < div  className = "rrt-holder" >
// < svg className = "toastr-icon"
// xmlns = "http://www.w3.org/2000/svg"
// preserveAspectRatio = "xMidYMid meet"
// viewBox = "0 0 32 32"
// style = "width: 32px; height: 32px;" > < g > < path
// d = "M27 4l-15 15-7-7-5 5 12 12 20-20z" > < /path></g > < /svg></di
// v > < /div><div className="rrt-middle-container" role="alertdialog" aria-labelledby="dialogTitle-1254" aria-describedby="dialogDesc-1254"><div id="dialogTitle-1254" className="rrt-title">Пользователь обновлен</di
// v > < div
// id = "dialogDesc-1254"
// className = "rrt-text" > Пользователь
// успешно
// обновлен < /div></di
// v > < div
// className = "rrt-right-container" >
// < div className = "close-toastr toastr-control" aria - label = "toast" > < span >✕</span></div></div>
// <div className="rrt-progress-container">
// 	<div className="rrt-progressbar" style="width: 0%;"></div>
// </div>
// </div></div></div></div>
