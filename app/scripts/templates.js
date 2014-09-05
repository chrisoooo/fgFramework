'use strict';
angular.module('templates-templates', ['templates/fgAppNavbar.html', 'templates/fgnotificationcenter.html', 'views/about.html', 'views/bill.html', 'views/gis.html', 'views/gpssupervison.html', 'views/illegalrecord.html', 'views/login.html', 'views/main.html', 'views/videomantain.html', 'views/videosupervison.html']);

angular.module('templates/fgAppNavbar.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/fgAppNavbar.html',
    '<div>\n' +
    '  <div class="navbar navbar-fixed-top navbar-default" role="navigation" id="id-navbar-toggle">\n' +
    '    <div class="container-fluid">\n' +
    '      <div class="navbar-header">\n' +
    '        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n' +
    '          <span class="sr-only">导航开关</span>\n' +
    '          <span class="icon-bar"></span>\n' +
    '          <span class="icon-bar"></span>\n' +
    '          <span class="icon-bar"></span>\n' +
    '        </button>\n' +
    '        <a class="navbar-brand" ng-href="#">{{title}}</a>\n' +
    '      </div>\n' +
    '      <div class="collapse navbar-collapse">\n' +
    '        <ul id="menu" class="nav navbar-nav">\n' +
    '          <li class="dropdown" ng-repeat="menu in menus">\n' +
    '            <a ng-href="{{menu.path}}" class="menu pointer" data-toggle="dropdown">{{menu.menuName}}\n' +
    '              <b class="caret" ng-if="menu.children.length > 0"></b>\n' +
    '            </a>\n' +
    '            <ul class="dropdown-menu" ng-if="menu.children.length > 0">\n' +
    '              <li ng-repeat="i in menu.children" class="dropdown-submenu">\n' +
    '                <a ng-href="{{i.path}}" ng-click="changeSwitchMenu(i.menuName);">\n' +
    '                  {{i.menuName}}\n' +
    '                    <i class="fa fa-sort-down fa-rotate-270" ng-if="i.show"></i>\n' +
    '                </a>\n' +
    '                <ul class="dropdown-menu" ng-if="i.show">\n' +
    '                  <li ng-repeat="a in i.children" ng-class = "{\'divider\': !a.path} ">\n' +
    '                    <a ng-href="{{a.path}}" ng-if="a.path" ng-click="changeSwitchMenu(i.menuName);">{{a.menuName}}</a>\n' +
    '                  </li>\n' +
    '                </ul>\n' +
    '              </li>\n' +
    '            </ul>\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '        <ul class="nav navbar-nav navbar-right">\n' +
    '          <!-- <li><a ng-href="#" ng-hide="authed">登录</a></li>\n' +
    '          <li>\n' +
    '            <a ng-show="authed">\n' +
    '                <span class="glyphicon glyphicon-user" title="{{username}}"></span>\n' +
    '            </a>\n' +
    '          </li>\n' +
    '          <li>\n' +
    '            <a style="cursor: pointer;" ng-click="logout();" ng-show="authed" tooltip="注销">\n' +
    '              <span class="glyphicon glyphicon-log-out"></span>\n' +
    '            </a>\n' +
    '          </li> -->\n' +
    '          <li id="id-navbar-toggle">\n' +
    '            <a style="cursor: pointer;" fg-event="fgNotificationCenter:toggle">\n' +
    '              <i class="fa fa-list"></i>\n' +
    '            </a>\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <a style="z-index: 1000; position: absolute; top: 0; left: 50%; height: 32px; width: 32px; cursor: pointer; font-size: 20px; color: black;" \n' +
    '  fg-event="toggleNavbar">\n' +
    '    <i class="fa fa-angle-double-down"></i>\n' +
    '  </a>\n' +
    '</div>');
}]);

angular.module('templates/fgnotificationcenter.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/fgnotificationcenter.html',
    '<div>\n' +
    '  <div class="fg-notification-center-header">\n' +
    '    <h4>通知中心</h4>\n' +
    '  </div>\n' +
    '  <div class="fg-notification-center-body" ng-transclude></div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('views/about.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('views/about.html',
    '<p>This is the about view.</p>\n' +
    '');
}]);

angular.module('views/bill.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('views/bill.html',
    '<!-- 工具栏 -->\n' +
    '<legend>票据</legend>\n' +
    '<div class="row" style="margin:15px 0px">\n' +
    '  <div class="col-sm-12">\n' +
    '    <div class="btn-group">\n' +
    '      <a class="btn btn-success btn-sm" ng-click="applyNewModal()">\n' +
    '        <span class="glyphicon glyphicon-plus" tooltip="申请"></span> 申请票据\n' +
    '      </a>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="row" id="tabContent"  style="margin:15px 0px">\n' +
    '  <div class="col-sm-12">\n' +
    '    <table class="table table-bordered table-hover table-condensed">\n' +
    '      <thead>\n' +
    '        <tr>\n' +
    '          <th class="check"><input type="checkbox" ng-model="allChecked" ng-click="selectAll();"></th>\n' +
    '          <th>序号</th>\n' +
    '          <th>票据号</th>\n' +
    '          <th>系统流水号</th>\n' +
    '          <th>领用人</th>\n' +
    '          <th>领用时间</th>\n' +
    '          <th>是否有效</th>\n' +
    '          <th>是否作废</th>\n' +
    '          <th>是否补打</th>\n' +
    '          <th>决定书编号</th>\n' +
    '          <th>操作</th>\n' +
    '        </tr>\n' +
    '      </thead>\n' +
    '      <tbody>\n' +
    '        <tr ng-repeat="record in records">\n' +
    '          <td class="check"><input type="checkbox" ng-model="checks[$index]" ng-click="select($index);"></td>\n' +
    '          <td>{{$index+1}}</td>\n' +
    '          <td>{{record.noteId}}</td>\n' +
    '          <td>{{record.seqNo}}</td>\n' +
    '          <td>{{record.receiveUser}}</td>\n' +
    '          <td>{{record.receiveTime}}</td>\n' +
    '          <td>\n' +
    '            <span ng-class="{\'0\': \'yhte-ico-danger\',\'1\': \'yhte-ico-success\'}[\'{{record.isValid}}\']">{{record.isValid}}  </span>\n' +
    '            </td>\n' +
    '          <td>\n' +
    '            <span ng-class="{\'0\': \'yhte-ico-danger\',\'1\': \'yhte-ico-success\'}[\'{{record.isValid}}\']">{{record.isRevoke}}</span></td>\n' +
    '          <td>\n' +
    '            <span ng-class="{\'0\': \'yhte-ico-danger\',\'1\': \'yhte-ico-success\'}[\'{{record.isValid}}\']">{{record.isReprint}}  </span></td>\n' +
    '          <td>{{record.jdsbh}}</td>\n' +
    '          <td><i class="fa fa-money yhte-ico-success" ng-click=""> 作废</i></td>\n' +
    '        </tr>\n' +
    '      </tbody>\n' +
    '    </table>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="row">\n' +
    '  <div class="col-sm-12">\n' +
    '    <div pagination class="pagination-sm pull-right" boundary-links="true" rotate="false" \n' +
    '      total-items="total"\n' +
    '      page="Q.page" \n' +
    '      items-per-page="Q.limit"\n' +
    '      max-size="5"\n' +
    '      on-select-page="pChange(page)"\n' +
    '      previous-text="上一页"\n' +
    '      next-text="下一页"\n' +
    '      last-text="最后一页"\n' +
    '      first-text="最前一页">\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<!-- s申请票据 -->\n' +
    '<div class="modal fade" id="newModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n' +
    '    <div class="modal-dialog" style="width: 1000px;">\n' +
    '      <div class="modal-content">\n' +
    '        <div class="modal-header">\n' +
    '            <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>\n' +
    '            <h4 id="myModalLabel" class="modal-title"> 申请票据\n' +
    '            </h4>\n' +
    '        </div>\n' +
    '        <div class="modal-body" style="">\n' +
    '            <div class="input-group"> \n' +
    '              <span class="input-group-addon">票据号 从</span>\n' +
    '              <input type="text" class="form-control" ng-model="qbill.start"/>\n' +
    '              <span class="input-group-addon">到</span>\n' +
    '              <input type="text" class="form-control" ng-model="qbill.end"/>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="modal-footer" style="">\n' +
    '          <div class="btn-group">\n' +
    '              <a class="btn btn-default btn-sm"  data-dismiss="modal">\n' +
    '              <i class="fa fa-time"> 关闭</i></a>\n' +
    '              <a class="btn btn-success btn-sm" ng-click="applyNew()">\n' +
    '                <span class="glyphicon glyphicon-check"></span> 确定\n' +
    '              </a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '');
}]);

angular.module('views/gis.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('views/gis.html',
    '<div fg-map></div>\n' +
    '<div fg-notification-center class="auto-height">\n' +
    '\n' +
    '  <div class="widget">\n' +
    '    <div class="widget-title">\n' +
    '      实时轨迹\n' +
    '      <div class="pull-right">\n' +
    '        <i class="fa fa-info-circle"></i>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="widget-body">\n' +
    '      <div>\n' +
    '        <p>苏E12345</p>\n' +
    '        <p>苏E00312</p>\n' +
    '        <p>苏E09124</p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="widget">\n' +
    '    <div class="widget-title">\n' +
    '      实时轨迹\n' +
    '      <div class="pull-right">\n' +
    '        完成\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="widget-body" style="padding-left:10px;">\n' +
    '      <table style="width: 100%;">\n' +
    '        <tbody>\n' +
    '          <tr>\n' +
    '            <td style="width: 25px; text-align: center;">\n' +
    '              <!-- <i class="fa fa-minus-circle"></i> -->\n' +
    '            </td>\n' +
    '            <td>\n' +
    '              <p>苏E12345</p>\n' +
    '            </td>\n' +
    '          </tr>\n' +
    '          <tr>\n' +
    '            <td  style="width: 25px; text-align: center;padding-top:3px;">\n' +
    '              <i class="fa fa-minus-circle" style="font-size: 1.2em;"></i>\n' +
    '            </td>\n' +
    '            <td>\n' +
    '              <p style="border-top: solid #555 1px;">苏E12345</p>\n' +
    '            </td>\n' +
    '          </tr>\n' +
    '          <tr>\n' +
    '            <td  style="width: 25px; text-align: center;padding-top:3px;">\n' +
    '              <i class="fa fa-minus-circle yhte-ico-danger-bright" style="font-size: 1.2em;"></i>\n' +
    '            </td>\n' +
    '            <td>\n' +
    '              <p style="border-top: solid #555 1px;">苏E09124</p>\n' +
    '            </td>\n' +
    '          </tr>\n' +
    '          <tr>\n' +
    '            <td  style="width: 25px; text-align: center;padding-top:3px;">\n' +
    '              <i class="fa fa-plus-circle yhte-ico-success-bright" style="font-size: 1.2em;"></i>\n' +
    '            </td>\n' +
    '            <td>\n' +
    '              <p style="border-top: solid #555 1px;font-size: 12px;color:#aaa;">添加</p>\n' +
    '            </td>\n' +
    '          </tr>\n' +
    '        </tbody>\n' +
    '      </table>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="widget">\n' +
    '    <div class="widget-title">\n' +
    '      实时轨迹\n' +
    '      <div class="pull-right">\n' +
    '        取消\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="widget-body">\n' +
    '      <div>\n' +
    '        <p style="font-size: 10px;color: #aaa;">输入车牌号码</p>\n' +
    '        <div style="padding-right:35px;margin-bottom: 8px;">\n' +
    '          <input type="text" placeholder="搜索" \n' +
    '          style="background-color: #444;border: solid 1px #555;width:100%;padding: 0 20px;border-radius: 3px;">  \n' +
    '        </div>\n' +
    '        <p style="font-size: 10px;color: #aaa;padding: 3px 0;">找不到结果。</p>\n' +
    '        <p style="font-size: 10px;color: #aaa;padding: 3px 0;">正在查询车辆...</p>\n' +
    '        <p style="font-size: 10px;color: #aaa;padding: 3px 0;">苏E00000</p>\n' +
    '        <p style="font-size: 10px;color: #aaa;padding: 3px 0;">苏E00002</p>\n' +
    '        <p style="font-size: 10px;color: #aaa;padding: 3px 0;">苏E00001</p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '</div>');
}]);

angular.module('views/gpssupervison.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('views/gpssupervison.html',
    '<div class="col-sm-9 auto-height" fg-map>\n' +
    '</div>\n' +
    '<div class="col-sm-3 auto-height">\n' +
    '  \n' +
    '</div>\n' +
    '');
}]);

angular.module('views/illegalrecord.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('views/illegalrecord.html',
    '<!-- 工具栏 -->\n' +
    '<legend>违法信息</legend>\n' +
    '<div class="row"  style="margin:15px 0px">\n' +
    '  <div class="col-sm-4">\n' +
    '    <div class="btn-group btn-group-sm">\n' +
    '      <a class="btn btn-sm btn-danger" ng-click="removeAll()"><i class="fa fa-times"> 清空列表</i></a>\n' +
    '      <a class="btn btn-sm btn-warning" ng-click="removePart()"><i class="fa fa-minus"> 移除</i></a>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="col-sm-8">\n' +
    '    <div class="col-sm-11">\n' +
    '      <div class="col-sm-6">\n' +
    '        <div class="input-group">\n' +
    '          <span class="input-group-addon">驾驶证号</span>\n' +
    '          <input class="form-control input-sm" ng-model="Q.jszh" />\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="col-sm-6">\n' +
    '        <div class="input-group">\n' +
    '          <span class="input-group-addon">决定书编号</span>\n' +
    '          <input class="form-control input-sm" ng-model="Q.jdsbh" />\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <a class="btn btn-sm btn-primary pull-right" ng-click="query()"><i class="fa fa-search"> 查询</i></a>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="row" style="margin:15px 0px">\n' +
    '  <div class="col-sm-12">\n' +
    '    <div class="alert alert-success" role="alert">\n' +
    '      <span style="margin-right:30px">罚款金额：{{fk}}</span>\n' +
    '      <span style="margin-right:30px">滞纳金：{{zn}}</span>\n' +
    '      <span>  总金额:{{total}}</span>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="row" id="tabContent"  style="margin:15px 0px">\n' +
    '  <div class="col-sm-12">\n' +
    '    <table class="table table-bordered table-hover table-condensed">\n' +
    '      <thead>\n' +
    '        <tr>\n' +
    '          <th class="check"><input type="checkbox" ng-model="allChecked" ng-click="selectAll();"></th>\n' +
    '          <th></th>\n' +
    '          <th>序号</th>\n' +
    '          <th>数据来源</th>\n' +
    '          <th>决定书</th>\n' +
    '          <th>号牌号码</th>\n' +
    '          <th>号牌种类</th>\n' +
    '          <th>违法行为</th>\n' +
    '          <th>违法地点</th>\n' +
    '          <th>违法时间</th>\n' +
    '          <th>处理时间</th>\n' +
    '          <th>罚款金额</th>\n' +
    '          <th>滞纳金</th>\n' +
    '          <th>缴款标志</th>\n' +
    '          <th>收费</th>\n' +
    '          <th>打印票据</th>\n' +
    '        </tr>\n' +
    '      </thead>\n' +
    '      <tbody>\n' +
    '        <tr ng-repeat="record in records">\n' +
    '          <td class="check"><input type="checkbox" ng-model="checks[$index]" ng-click="select($index);"></td>\n' +
    '          <td style="text-align:center;width:15px" ng-click="removePart(record)"><i class="fa fa-minus-circle"></i></td>\n' +
    '          <td>{{$index+1}}</td>  \n' +
    '          <td>{{record.xxly}}</td>\n' +
    '          <td>{{record.jdsbh}}</td>\n' +
    '          <td>{{record.hphm}}</td>\n' +
    '          <td>{{record.hpzl}}</td>\n' +
    '          <td>{{record.wfxw}}</td>\n' +
    '          <td>{{record.wfdz}}</td>\n' +
    '          <td>{{record.wfsj | date:\'yyyy-MM-dd HH:mm:ss\'}}</td>\n' +
    '          <td>{{record.clsj | date:\'yyyy-MM-dd HH:mm:ss\'}}</td>\n' +
    '          <td>{{record.fkje}}</td>\n' +
    '          <td>{{record.znj}}</td>\n' +
    '          <td>{{record.jkbj}}</td> \n' +
    '          <td style="text-align:center"><i class="fa fa-money yhte-ico-success" ng-click="confirmModal(record)"> </i></td>\n' +
    '          <td style="text-align:center">\n' +
    '            <i class="fa fa-print yhte-ico-priamry" ng-click="print(record)" ng-show="record.jkbj = \'1\'"> </i>\n' +
    '          </td>\n' +
    '        </tr>\n' +
    '      </tbody>\n' +
    '    </table>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="row">\n' +
    '<!--   <div class="col-sm-12">\n' +
    '    <div pagination class="pagination-sm pull-right" boundary-links="true" rotate="false" \n' +
    '      total-items="total"\n' +
    '      page="" \n' +
    '      items-per-page=""\n' +
    '      max-size="5"\n' +
    '      on-select-page="pChange(page)"\n' +
    '      previous-text="上一页"\n' +
    '      next-text="下一页"\n' +
    '      last-text="最后一页"\n' +
    '      first-text="最前一页">\n' +
    '    </div>\n' +
    '  </div> -->\n' +
    '</div>\n' +
    '\n' +
    '<!-- 新增票据 -->\n' +
    '<div class="modal fade" id="conformModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n' +
    '    <div class="modal-dialog" style="width: 1000px;">\n' +
    '      <div class="modal-content">\n' +
    '        <div class="modal-header">\n' +
    '            <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>\n' +
    '            <h4 id="myModalLabel" class="modal-title"> 确认收费信息\n' +
    '            </h4>\n' +
    '        </div>\n' +
    '        <div class="modal-body">\n' +
    '          <div class="row marginLR0">\n' +
    '              <div class="col-sm-12">\n' +
    '                <p>\n' +
    '                  <span class="badge badge-primary">1</span>\n' +
    '                  <span style="margin-left:10px">核对用户票据 </span>\n' +
    '                  <span style="margin-left:10px">\n' +
    '                    <i class="fa fa-spinner yhte-ico-success" tooltip="正在查询" ng-show="billCheckI"></i>\n' +
    '                    <i class="fa fa-check yhte-ico-success" tooltip="成功" ng-show="billCheckS"></i>\n' +
    '                    <i class="fa fa-info-circle yhte-ico-danger" tooltip="失败"  ng-show="billCheckF"></i>\n' +
    '                  </span>\n' +
    '                </p>\n' +
    '                <p ng-show="account">\n' +
    '                  <span class="badge badge-primary">2</span>\n' +
    '                  <span style="margin-left:10px">银行对账 </span>\n' +
    '                  <span style="margin-left:10px">\n' +
    '                    <i class="fa fa-check yhte-ico-success" tooltip="成功" ng-show="accountCheckS"></i>\n' +
    '                    <i class="fa fa-info-circle yhte-ico-danger" tooltip="失败" ng-show="accountCheckF"></i>\n' +
    '                  </span>\n' +
    '                  <span>{{accountFailedInfo}}</span>\n' +
    '                </p>\n' +
    '              </div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row" style="margin:15px 0px">\n' +
    '                <div class="input-group">\n' +
    '                  <span class="input-group-addon">票据编号</span>\n' +
    '                  <input type="text" class="form-control" ng-model="newBill.noteNo">\n' +
    '                </div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row marginLR0">\n' +
    '            <table class="table table-condensed table-bordered" ng-model="newBill.noteNo">\n' +
    '              <tr><td style="width:100px">车牌号码</td><td>{{newBill.hphm}}</td>\n' +
    '                <td style="width:100px">号牌种类</td><td>{{newBill.hpzl}}</td>\n' +
    '              </tr>\n' +
    '              <tr><td>违法时间</td><td>{{newBill.wfsj | date:\'yyyy-MM-dd HH:mm:ss\'}}</td><td>违法地点</td><td>{{newBill.wfdd}}</td></tr>\n' +
    '              <tr><td>违法行为</td><td>{{newBill.wfxw}}</td><td>计分</td><td>{{newBill.wfjfs}}</td></tr>\n' +
    '              <tr><td>当事人</td><td>{{newBill.dsr}}</td><td>驾驶证号</td><td>{{newBill.jszh}}</td></tr>\n' +
    '              <tr><td>车主</td><td>{{newBill.jdcsyr}}</td><td>车型</td><td>{{newBill.clfl}}</td></tr>\n' +
    '              <tr><td>罚款金额</td><td>{{newBill.fkje}}</td><td>滞纳金</td><td>{{newBill.znj}}</td></tr>\n' +
    '              <tr><td>总金额</td><td>{{newBill.fkje + newBill.znj}}</td></tr>\n' +
    '            </table>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="modal-footer">\n' +
    '          <div class="btn-group">\n' +
    '              <a class="btn btn-default btn-sm"  data-dismiss="modal">\n' +
    '              <i class="fa fa-time"> 关闭</i></a>\n' +
    '              <a class="btn btn-primary btn-sm" ng-click="confirm()">\n' +
    '                <i class="fa fa-check"></i> 银行对账\n' +
    '              </a>\n' +
    '              <a class="btn btn-success btn-sm" ng-click="print(newBill)" ng-show="rePrint">\n' +
    '                <i class="fa fa-print"></i> 重新打印\n' +
    '              </a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div><!-- /.modal-content -->\n' +
    '    </div><!-- /.modal-dialog -->\n' +
    '</div>\n' +
    '');
}]);

angular.module('views/login.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('views/login.html',
    '<div class="col-sm-4 col-sm-offset-4" style="margin-top:100px">\n' +
    '	<form role="form">\n' +
    '	  <div class="form-group">\n' +
    '	    <label for="userCode">用户名</label>\n' +
    '	    <input  class="form-control" id="userCode" placeholder="输入用户名" ng-model="user.userCode">\n' +
    '	  </div>\n' +
    '	  <div class="form-group">\n' +
    '	    <label for="password">密码</label>\n' +
    '	    <input type="password" class="form-control" id="password" placeholder="输入密码" ng-model="user.password">\n' +
    '	  </div>\n' +
    '	  <button  class="btn btn-success col-sm-12" ng-click="login()">登录</button>\n' +
    '	</form>\n' +
    '</div>');
}]);

angular.module('views/main.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('views/main.html',
    '<div class="jumbotron">\n' +
    '  <h1>\'Allo, \'Allo!</h1>\n' +
    '  <p class="lead">\n' +
    '    <img src="images/yeoman.png" alt="I\'m Yeoman"><br>\n' +
    '    Always a pleasure scaffolding your apps.\n' +
    '  </p>\n' +
    '  <p><a class="btn btn-lg btn-success" ng-click="showMessenger();">{{name}}!<span class="glyphicon glyphicon-ok"></span></a></p>\n' +
    '</div>\n' +
    '');
}]);

angular.module('views/videomantain.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('views/videomantain.html',
    '<div class="col-sm-12 auto-height">\n' +
    '  <legend>视频分组</legend>\n' +
    '\n' +
    '  <div class="row">\n' +
    '    <div class="col-sm-3" style="margin-bottom: 15px;">\n' +
    '      <div class="btn-group">\n' +
    '        <button class="btn btn-success btn-sm">添加</button>\n' +
    '        <button class="btn btn-danger btn-sm">添加</button>\n' +
    '      </div>  \n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="row">\n' +
    '    <div class="col-sm-12">\n' +
    '      <table class="table table-bordered table-hover table-condensed">\n' +
    '        <tr>\n' +
    '          <th>编号</th>\n' +
    '          <th>名称</th>\n' +
    '          <th>性质</th>\n' +
    '          <th>类型</th>\n' +
    '          <th>云台</th>\n' +
    '          <th>位置</th>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '          <td>001</td>\n' +
    '          <td>视频1</td>\n' +
    '          <td>-</td>\n' +
    '          <td>普通视频</td>\n' +
    '          <td><i class="fa fa-check-circle yhte-ico-success"></i></td>\n' +
    '          <td><i class="fa fa-location-arrow"></i> 泰山路</td>\n' +
    '        </tr>\n' +
    '        <tr>\n' +
    '          <td>002</td>\n' +
    '          <td>视频2</td>\n' +
    '          <td>-</td>\n' +
    '          <td>督查视频</td>\n' +
    '          <td><i class="fa fa-check-circle yhte-ico-success"></i></td>\n' +
    '          <td><i class="fa fa-location-arrow"></i> 滨河路</td>\n' +
    '        </tr>\n' +
    '      </table>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '</div>');
}]);

angular.module('views/videosupervison.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('views/videosupervison.html',
    '<div fg-map></div>\n' +
    '<div fg-notification-center class="auto-height">\n' +
    '\n' +
    '  <div class="widget" \n' +
    '    ng-switch on="videoWidget.viewStack">\n' +
    '    <div class="widget-title">\n' +
    '      视频列表\n' +
    '      <div class="pull-right">\n' +
    '        <span \n' +
    '          ng-switch-when="tree" \n' +
    '          ng-click="videoWidget.viewStack=\'list\'">\n' +
    '          编辑\n' +
    '        </span>\n' +
    '        <span \n' +
    '          ng-switch-when="list"\n' +
    '          ng-click="videoWidget.viewStack=\'tree\'">\n' +
    '          完成\n' +
    '        </span>\n' +
    '        <span \n' +
    '          ng-switch-when="new"\n' +
    '          ng-click="videoWidget.viewStack=\'list\'">\n' +
    '          取消\n' +
    '        </span>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="widget-body" style="padding-left:10px;" >\n' +
    '      <!-- tree view -->\n' +
    '      <div fg-jstree ng-model="model" node="record.node" selected="record.nodes" ng-switch-when="tree">\n' +
    '      </div>\n' +
    '      \n' +
    '      <!-- table view -->\n' +
    '      <table style="width: 100%;" ng-switch-when="list">\n' +
    '        <tbody>\n' +
    '          <tr ng-repeat="group in groups">\n' +
    '            <td style="width: 25px; text-align: center;">\n' +
    '              <!-- 删除分组 -->\n' +
    '              <i class="fa fa-minus-circle yhte-ico-danger-bright"\n' +
    '                style="font-size: 1.2em;" \n' +
    '                ng-if="$last" \n' +
    '                ng-click="deleteGroup(group);"></i>\n' +
    '            </td>\n' +
    '            <td>\n' +
    '              <!-- 第一个 item 不显示 border-top -->\n' +
    '              <p class="list-item" ng-class="{\'top-divider\':!$first}">{{group.text}}</p>\n' +
    '            </td>\n' +
    '          </tr>\n' +
    '          <tr>\n' +
    '            <td  style="width: 25px; text-align: center;padding-top:3px;">\n' +
    '              <i class="fa fa-plus-circle yhte-ico-success-bright" style="font-size: 1.2em;"></i>\n' +
    '            </td>\n' +
    '            <td>\n' +
    '              <!-- item 个数大于 0 时才显示 border-top -->\n' +
    '              <p class="list-item" ng-class="{\'top-divider\': groups.length>0}" style="font-size: 12px;color:#aaa;" ng-click="videoWidget.viewStack=\'new\'">添加</p>\n' +
    '            </td>\n' +
    '          </tr>\n' +
    '        </tbody>\n' +
    '      </table>\n' +
    '      \n' +
    '      <!-- form view -->\n' +
    '      <div style="padding:0 0 0 25px;" ng-switch-when="new">\n' +
    '        <p style="font-size: 8px;color: #aaa;">输入分组名称</p>\n' +
    '        <div style="padding-right:35px;margin-bottom: 8px;">\n' +
    '          <input type="text" placeholder="名称" ng-model="group.name"\n' +
    '          style="background-color: #444;border: solid 1px #555;width:100%;padding: 0 20px;border-radius: 3px;" ng-keypress="addGroup($event);">  \n' +
    '        </div>\n' +
    '        <p style="font-size: 10px;color: #aaa;padding: 3px 0;">不能为空，按「回车」确认。</p>\n' +
    '      </div>\n' +
    '\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '</div>');
}]);
