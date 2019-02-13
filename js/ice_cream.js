function iceCream() {
    var allCones = math.floor(math.random() * 50) * 50;

    do {
        var orderCones = math.floor(math.random() * 5) * 1;

        if (allCones > orderCones) {
            allCones = allCones - orderCones;
            console.log("can't sell" + orderCones + "i only have" + orderCones);
        } else if (allCones = orderCones) {
            var allCones = allCones - orderCones;
            console.log("It's all sold yo");
            break;
        } else if (allCones < orderCones) {
            console.log("cannot sell" + orderCones + "i only have" + allCones);
            continue;
        }
        while (allCones >= 0) ;{

    } iceCream();