js优化总体原则
当需要时才优化
考虑可维护性

提升js文件加载性能
css文件放在Head里，js文件放在body里

js变量和函数优化
    尽量使用id选择器
    尽量避免使用eval
    js函数尽量保持简洁
    使用事件节流函数
    使用事件委托

js动画优化
    尽量避免大量js动画
    尽量使用css3动画
    尽量使用canvas动画
    合理使用requestAnimationFrame动画代替setTimeout、setInterval
    requestAnimationFrame可以在正确的时间进行渲染，setTimeout(callback)、setInterval(callback)无法保证callback回调函数的执行时机

合理使用缓存
合理缓存dom对象
缓存列表长度
使用可缓存的ajax

