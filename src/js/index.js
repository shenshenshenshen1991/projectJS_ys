require(['config'],function(){
    requirejs(['jquery'],function($){
        require(['lxCarousel','common','ajax','gonggong'],function(lx,cm,aj,gg){
        
            $('.carousel').lxCarousel({
                img:["img/lun1.jpg","img/lun2.jpg","img/lun3.jpg","img/lun4.jpg","img/lun5.jpg","img/lun6.jpg"],
                width: 780,
            });
            $('.getBar').load('gonggong.html .blackBar');
            $('.getHeader').load('gonggong.html .headerGG' );
            $('.getFooter').load('gonggong.html .footerGG' );


            // 将index.json文件中的数据请求至页面
            ajax({
                type:'get',
                url:'http://localhost:3333/api/data/index.json',
                async:true,
                success:function(data){
                    data.map(function(item){
                        
                    var $flr1 = $ ('.bottom1 .main');
                        if(item.id == '1f1'){
                            $flr1.find('.smallP').get(0).innerHTML = item.imgurl.map(function(i){
                                return `<li><a><img src="${i}" ></a></li>`

                            }).join('')
                        };
                        if(item.id == '1f2'){
                            $flr1.find('.largeP').get(0).innerHTML = item.imgurl.map(function(i){
                                return `<li><a><img src="${i}" ></a></li>`

                            }).join('')
                        };
                        // 写入页面
                        
                    $flr1.find('.smallP').appendTo($flr1);
                    $flr1.find('.largeP').appendTo($flr1);


                    var $flr2 = $ ('.bottom2 .main');
                        if(item.id == '2f'){
                            $flr2.find('.womanP').get(0).innerHTML = item.imgurl.map(function(i){
                                return `<li><a><img src="${i}" ></a></li>`

                            }).join('')
                        };
                    $flr2.find('.womanP').appendTo($flr2);

                    var $flr3 = $ ('.bottom3 .main');
                        if(item.id == '3f1'){
                            $flr3.find('.manP_l').get(0).innerHTML = item.imgurl.map(function(i){
                                return `<li><a><img src="${i}" ></a></li>`

                            }).join('')
                        };
                        if(item.id == '3f2'){
                            $flr3.find('.manP_r').get(0).innerHTML = item.imgurl.map(function(i){
                                return `<li><a><img src="${i}" ></a></li>`

                            }).join('')
                        };
                    $flr3.find('.manP_l').appendTo($flr3);
                    $flr3.find('.manP_r').appendTo($flr3);


                    var $flr4 = $ ('.bottom4 .main');
                        if(item.id == '4f1'){
                            $flr4.find('.huwai_l').get(0).innerHTML = item.imgurl.map(function(i){
                                return `<li><a><img src="${i}" ></a></li>`

                            }).join('')
                        };
                        if(item.id == '4f2'){
                            $flr4.find('.huwai_c').get(0).innerHTML = item.imgurl.map(function(i){
                                return `<li><a><img src="${i}" ></a></li>`

                            }).join('')
                        };
                        if(item.id == '4f3'){
                            $flr4.find('.huwai_r').get(0).innerHTML = item.imgurl.map(function(i){
                                return `<li><a><img src="${i}" ></a></li>`

                            }).join('')
                        };
                    $flr4.find('.huwai_l').appendTo($flr4);
                    $flr4.find('.huwai_c').appendTo($flr4);
                    $flr4.find('.huwai_r').appendTo($flr4);
                    // 5楼
                    var $flr5 = $ ('.bottom5 .main');
                        if(item.id == '5f1'){
                            $flr5.find('.child_l').get(0).innerHTML = item.imgurl.map(function(i){
                                return `<li><a><img src="${i}" ></a></li>`

                            }).join('')
                        };
                        if(item.id == '5f2'){
                            $flr5.find('.child_c').get(0).innerHTML = item.imgurl.map(function(i){
                                return `<li><a><img src="${i}" ></a></li>`

                            }).join('')
                        };
                        if(item.id == '5f3'){
                            $flr5.find('.child_r').get(0).innerHTML = item.imgurl.map(function(i){
                                return `<li><a><img src="${i}" ></a></li>`

                            }).join('')
                        };
                    $flr5.find('.child_l').appendTo($flr5);
                    $flr5.find('.child_c').appendTo($flr5);
                    $flr5.find('.child_r').appendTo($flr5);



                    });
                }
            })

            // 将top7.json文件中的数据请求至页面
            ajax({
                type:'get',
                url:'http://localhost:3333/api/data/top7.json',
                async:true,
                success:function(data){
                    var $rankTop = $('.rankT');
                    var res = data.map(function(item){
                        return `<li class="r">
                        <ul>
                            <li class="shuzi">${item.id}</li>
                            <li><a href="" >  <img src="${item.imgurl}" /></a></li>
                            <li><a href=""  class="name">${item.name}</a></li>
                            <li><span class='yishou'>${item.yishou}</span></li>
                            <li><span class='qty'>${item.qty}</span></li>
                        </ul>
                        </li>`
                    }).join('');
                    $rankTop.html(res);
                    
                }
            })
            

            // 将tab.json文件中的数据请求至页面
            ajax({
                type:'get',
                url:'http://localhost:3333/api/data/tab.json',
                async:true,
                success:function(data){
                    var tab1 = data.slice(0,2);
                    var tab2 = data.slice(2,6);
                    var tab3 = data.slice(6,10);
                    var tab4 = data.slice(10);
                    // 遍历tab1 写入ul.tab1
                    var $Tab1 = $('.tab_content .tab1');
                    $Tab1.get(0).innerHTML = tab1.map(function(i1){
                        return `<li>
                        <div class="title">活动结束了</div>
                        <div><img src="${i1.imgurl}" ></div>
                        <div class="name">${i1.name}</div>
                        <div class="price">抢购价：${i1.price}</div>
                        </li>`
                    }).join('');

                    // 遍历tab1 写入ul.tab1
                    var $Tab2 = $('.tab_content .tab2');
                    $Tab2.get(0).innerHTML = tab2.map(function(i2){
                        return `<li>
                        <div><img src="${i2.imgurl}" ></div>
                        <div class="name">${i2.name}</div>
                        <div class="bprice">原价：${i2.bprice}</div>
                        <div class="nprice">${i2.nprice}</div>
                        </li>`
                    }).join('');

                    // 遍历tab1 写入ul.tab1
                    var $Tab3 = $('.tab_content .tab3');
                    $Tab3.get(0).innerHTML = tab3.map(function(i3){
                        return `<li>
                        <div><img src="${i3.imgurl}" ></div>
                        
                        </li>`
                    }).join('');

                    // 遍历tab1 写入ul.tab1
                    var $Tab4 = $('.tab_content .tab4');
                    $Tab4.get(0).innerHTML = tab4.map(function(i4){
                        return `<li>
                        <div><img src="${i4.imgurl}" ></div>
                        <div class="name">${i4.name}</div>
                        <div class="mprice">市场价：${i4.bprice}</div>
                        <div class="nprice">淘鞋价${i4.nprice}</div>
                        </li>`
                    }).join('');

                }
            });

            // 页面生成之后实现tab切换
            // 默认显示第一个ul
            // 鼠标移入其他tab显示对应的ul
            // // 实现点击小图切换对应的大图
            var $tab = $('.tab_title li');
            var $content = $('.tab_content ul');
            // 隐藏所有的.content
            $content.slice(1).hide();
          
            $tab.first().addClass('selected');

            // 点击标签切换
            $tab.on('mouseenter',function(){
                $(this).addClass('selected').siblings().removeClass('selected');
                var idx = $(this).index();
                $content.eq(idx).show().siblings('ul').hide();
            })




            // 左右按钮实现tab滑动
            var $b = $('.brandsbox');
            $('.allbrands').get(0).onclick = function(e){
                var target = e.target || e.srcElement;
                var juli = $b.get(0).offsetLeft;
                juli = juli<0? 0 : - $('.box').width();
                if(target.className == 'toPrev'){
                    animate($b.get(0),{left:juli})        
                }
                else if(target.className == 'toNext'){
                    animate($b.get(0),{left:juli})        
                }

            }
        
            
        })
    })
})





