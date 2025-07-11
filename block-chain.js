const blockChain = (data, prev) => {
    if (prev == undefined) {
        prev = { index: 0, hash: '0' }
    }
    const block = {}
    block.index = prev.index + 1
    block.hash = hashCode(block.index + prev.hash + JSON.stringify(data))
    block.data = data
    block.prev = prev
    block.chain = (Data) => blockChain(Data, block)

    return block
}
