hexo.extend.helper.register('excerpt_gen', function (content) {
    let result = ''
    let wordCount = 0
    for (let c of content) {
        if (c === ' ') wordCount++
        if (wordCount === 15) break
        result += c
    }

    if (wordCount === 15)
    result += '...'

    return result
})