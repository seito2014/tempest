var DEV_PC = './app/pc/dev',
    PUBLIC_PC = './app/pc/public',
    DEV_SP = './app/sp/dev',
    PUBLIC_SP = './app/sp/public';

module.exports = {
    pc: {
        dev: DEV_PC,
        public: PUBLIC_PC,
        html: {
            src: [
                DEV_PC + '/ejs/**/*.ejs',
                '!' + DEV_PC + '/ejs/**/_*.ejs'
            ],
            dest: PUBLIC_PC
        },
        style: {
            src: DEV_PC + '/sass/**/*.scss',
            dest: PUBLIC_PC + '/css',
            lintExcluding: '!' + DEV_PC + '/sass/sprite/*.scss'
        },
        image:{
            src: DEV_PC + '/image/**/*',
            dest: PUBLIC_PC + '/image'
        },
        sprite:{
            src: DEV_PC + '/image/sprite/src/**/*.png',
            destImage: DEV_PC + '/image/sprite/dest',
            destStyle: DEV_PC + '/sass/sprite'
        },
        script: {
            src: DEV_PC + '/js/**/*',
            dest: PUBLIC_PC + '/js'
        },
        lib:{
            src: DEV_PC + '/lib/**/*',
            dest: PUBLIC_PC + '/lib'
        }
    },
    sp: {
        dev: DEV_SP,
        public: PUBLIC_SP,
        html: {
            src: [
                DEV_SP + '/ejs/**/*.ejs',
                '!' + DEV_SP + '/ejs/**/_*.ejs'
            ],
            dest: PUBLIC_SP
        },
        style: {
            src: DEV_SP + '/sass/**/*.scss',
            dest: PUBLIC_SP + '/css',
            lintExcluding: '!' + DEV_SP + '/sass/sprite/*.scss'
        },
        image:{
            src: DEV_SP + '/image/**/*',
            dest: PUBLIC_SP + '/image'
        },
        sprite:{
            src: DEV_SP + '/image/sprite/src/**/*',
            destImage: DEV_SP + '/image/sprite/dest',
            destStyle: DEV_SP + '/sass/module'
        },
        script: {
            src: DEV_SP + '/js/**/*.js',
            dest: PUBLIC_SP + '/js'
        },
        lib:{
            src: DEV_PC + '/lib/**/*',
            dest: PUBLIC_PC + '/lib'
        }
    },
    spriteTemplate:'./gulp/sprite-template.mustache'
};