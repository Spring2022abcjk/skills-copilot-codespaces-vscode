function calculateNumbers(var1, var2) {
    // 参数类型检查
    if (typeof var1 !== 'number' || typeof var2 !== 'number') {
        throw new Error('参数必须是数字类型');
    }

    try {
        const result = var1 + var2;
        console.log(`计算结果: ${var1} + ${var2} = ${result}`);
        return result;
    } catch (error) {
        console.error('计算过程出错:', error.message);
        throw error;
    }
}