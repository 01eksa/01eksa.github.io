function setLang(lang) {
    switch (lang) {
        case 'EN':
            $('.local_uk').hide();
            $('.local_en').show();
            $('.set-en').addClass('active');
            $('.set-uk').removeClass('active');
            break
        case 'UK':
            $('.local_en').hide();
            $('.local_uk').show();
            $('.set-uk').addClass('active');
            $('.set-en').removeClass('active');
            break
        default:
            return;
    }

    document.documentElement.lang = lang.toLowerCase();
}

function getMonths(startYear, startMonths) {
    const now = new Date();
    const res = (now.getFullYear() - startYear) * 12 + (now.getMonth() + 1 - startMonths);
    return res;
}

function expLabel(months) {
    return months < 12 ? `${months}m` : `${Math.floor(months / 12)}y`;
}

function expColor(months){
    if (months < 6) return 'light-red';
    if (months < 12) return 'light-yellow';
    if (months < 36) return 'light-green'
    return 'light-cyan';
}

$(()=>{
    $('.set-en').on('click', () => setLang('EN'));
    $('.set-uk').on('click', () => setLang('UK'));
    setLang('EN');
    $('.exp[data-start]').each(function() {
        const [y, m] = $(this).attr('data-start').split('-').map(Number);
        const months = getMonths(y, m);
        $(this).text(expLabel(months));
        $(this).addClass(expColor(months));
    });
    $('body').css('opacity', '1');
})