function getIeVersion(){var e=navigator.userAgent,t=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1,n=e.indexOf("Edge")>-1&&!t,a=e.indexOf("Trident")>-1&&e.indexOf("rv:11.0")>-1;if(t){new RegExp("MSIE (\\d+\\.\\d+);").test(e);var r=parseFloat(RegExp.$1);return r>6?r:6}return n?"edge":a?11:-1}function setClipboardText(e,t){var n=getIeVersion();n>-1&&"edge"!=n&&n<11?window.event.returnValue=!1:e.preventDefault();var a="",r="";if(n>-1&&"edge"!=n&&n<11)a=document.selection.createRange().text,r=document.selection.createRange().htmlText;else{var i=window.getSelection().getRangeAt(0);a=i.toString();var o=document.createElement("div");o.appendChild(i.cloneContents()),r=o.innerHTML}if(a.length>=t){var d="\n------------------------------------\n作者：Aurzex\n来源：猫鱼a's Blog\n原文："+window.location.href+"\n"+"本文为博主原创文章，转载请附上博文链接！"+"\n\n";a+=d,r="<div>"+r+d.replace(/\n/g,"<br>")}if(n>-1&&"edge"!=n)return window.clipboardData.setData("text",a);e.clipboardData.setData("text/html",r),e.clipboardData.setData("text/plain",a)}document.body.oncopy=function(e){setClipboardText(e,120)};