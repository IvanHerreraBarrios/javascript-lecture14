var intervalIntersection = function(firstList, secondList) {
    const result = []
    let pa = 0, pb = 0
    let A = firstList, B = secondList

    while(pa < A.length && pb < B.length){
        a = A[pa]
        b = B[pb]
        if(a[1] < b[0]){
            //left
            pa++
        } else if(a[0] > b[1]){
            //rigth
            pb++
        } else {
            start = Math.max(a[0], b[0])
            end = Math.min(a[1], b[1])
            result.push([start, end])

            if(a[1] >= b[1]) pb++
            if(a[1] <= b[1]) pa++
        }
    }

    return result
};