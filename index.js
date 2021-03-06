module.exports = {
	//频率控制 函数连续调用时，fn 执行频率限定为 1次/waitMs。立即执行
	throttle: function (waitMs, fn) {
		var lastRun = 0;
		return function () {
			var now = +new Date;
			if (now - lastRun > waitMs) {
				lastRun = now;
				fn.apply(null, arguments);
			}
		}
	},

	//空闲控制 返回函数连续调用时，空闲时间必须大于或等于 waitMs，fn 才会执行。延迟执行
        function debounce(waitMs, fn) {
            var lastCall, that, args, timeout;
            return function r() {
                lastCall = +new Date;
                that = this
                args = arguments;
                // 避免每次都重新setTimeout
                if (!timeout) {
                    timeout = setTimeout(later, waitMs);
                }
            };
            function later() {
                var past = +new Date - lastCall;
                if (past > waitMs) {
                    timeout = 0;
                    fn.apply(that, args)
                }
                else {
                    timeout = setTimeout(later, waitMs - past + 1)
                }
            }
        }
};
