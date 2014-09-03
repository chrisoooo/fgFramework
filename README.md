# 更新

* `2014.09.01`解决 index.html 中相关 js 文件在启动时被修改的问题；
* `2014.09.02`添加 directive:fgDatetimepicker；
* `2014.09.02`添加 service:fgMessenger；

		fgMessenger.post({
		   
		});
		
		fgMessenger.confirm({
			message: '',
			actions: {
				delete: {
					label: 'Delete',
					action: function (){}
				}
			}
		});

* `2014.09.03`添加 directive:fgJstree v0.1；

# 使用说明

## 必备

* nodejs
* grunt
* bower
* yeoman
  * generator-angular

## 执行

* npm install
* bower install
* grunt serve