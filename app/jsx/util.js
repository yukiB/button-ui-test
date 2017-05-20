export const styleVal = (elm, styletype) => {
    return parseInt(document
                    .defaultView
                    .getComputedStyle(elm, '')
                    .getPropertyValue(styletype))}

    
export const cssVal = (selector, styletype) => {
    let rules = document.styleSheets.item(0).cssRules;
    let length = rules.length;
    let rule = [];
    for (let i=0; i<length; i++) {
        if (rules.item(i).selectorText == selector)
            rule.push(rules.item(i));
    }
    if (rule.length > 0)
        return rule[0].style[styletype];
    else
        return null;
}


export const date2int = (date) => {
    let ts = date.replace( /-/g, '/');
    let ux = Date.parse(ts) / 1000;
    return ux;
}


export const int2date = (val) => {
    let d = new Date( val * 1000 );
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day   = d.getDate();
    return year + '/' + month + '/' + day;
}


export const time2int = (time) => {
    let vals = time.split(':').map((v) => parseInt(v));
    if (vals.length != 3)
        return 0;
    return vals[2] + vals[1] * 60 + vals[0] * 60 * 60;
}


export const int2time = (val) => {
    let minute = parseInt(val / 60)
    let sec = val - minute * 60
    let hour = parseInt(minute / 60)
    minute = minute - hour * 60
    let time = [hour, minute, sec].map((d) => ( '00' + d ).slice( -2 ));
    return time.join(':');
    
}


export const conv2val = (type, input) => {
    if (input == '')
        return input
    switch(type) {
    case 'date':
        return date2int(input);
    case 'time':
        return time2int(input);
    default:
        return input
    }
}


export const conv2date = (type, input) => {
    if (input == '')
        return input
    switch(type) {
    case 'date':
        return int2date(input);
    case 'time':
        return int2time(input);
    default:
        return input
    }
}

export const checkObjDiff = (object1, object2) => {
    let object1String = JSON.stringify(object1); 
    let object2String = JSON.stringify(object2);
    return (object1String == object2String) ? false : true;
}

export const checkRsDiff = (rs1, rs2) => {
    if (rs1=={} && rs2=={})
        return false;
    return (!((parseInt(rs1.id=='' ? -1 : rs1.id)==
               parseInt(rs2.id=='' ? -1 : rs2.id)) &&
              (rs1.allele == rs2.allele)))
}

export const checkQuestionDiff = (q1, q2) => {
    if (q1=={} && q2=={})
        return false
    return (!((String(q1.id)==String(q2.id)) &&
              (String(q1.val==null ? '' : q1.val)==String(q2.val==null ? '' : q2.val))&&
              (String(q1.val2==null ? '' : q1.val2)==String(q2.val2==null ? '' : q2.val2))))
}

export const scaler = ([domainStart, domainEnd], [rangeStart, rangeEnd], val) => {
    return rangeStart + (val - domainStart) / (domainEnd - domainStart) * (rangeEnd - rangeStart);
}
