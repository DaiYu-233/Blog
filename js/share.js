function share() {
    let url = window.location.origin + window.location.pathname

    // 截取标题
    var title = document.title;
    var subTitle = title.endsWith("| 呆鱼") ? title.substring(0, title.length - 4) : title;
    navigator.clipboard.writeText('呆鱼-Blog的站内分享\n标题：' + subTitle + '\n链接：' + url + '\n欢迎来访！🍭🍭🍭');

    new ClipboardJS(".share", { text: function () { return '标题：' + document.title + '\n链接：' + url } });
    btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
}