
function effect(vs, fs) {

    var self = this;

    var init = function(width, height, canvas) {

        self.gl = window.twgl.getWebGLContext(canvas);

        self.programInfo = window.twgl.createProgramInfo(self.gl, [vs,fs]);

        var arrays = {
            position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
        };

        self.bufferInfo = window.twgl.createBufferInfoFromArrays(self.gl, arrays);

    }

    var render = function(time){

        window.twgl.resizeCanvasToDisplaySize(self.gl.canvas);

        self.gl.viewport(0, 0, self.gl.canvas.width, self.gl.canvas.height);

        var uniforms = {
            time: time * 0.001,
            mouse: [0., 0.],
            resolution: [self.gl.canvas.width, self.gl.canvas.height],
        };

        self.gl.useProgram(self.programInfo.program);

        window.twgl.setBuffersAndAttributes(self.gl, self.programInfo, self.bufferInfo);
        window.twgl.setUniforms(self.programInfo, uniforms);
        window.twgl.drawBufferInfo(self.gl, self.bufferInfo);

        requestAnimationFrame(render);

    }

    return { 
        init: init,
        render: render
    }

};

document.addEventListener('DOMContentLoaded', ()=>{

    var canvas = document.getElementById("fx");
    var width = canvas.width;
    var height = canvas.height;
        
    var bg = effect('vs','fs');
    
    bg.init(width, height, canvas);
    bg.render();
    
});
