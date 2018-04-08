if ($('.skill-box').length > 0) {
class createSkill {
    constructor(options) {
        this.s = Snap(options.container);
        const radius = options.width / 3;
        const cx = options.width / 2;
        const cy = options.height / 2;
        this.length = 2 * radius * Math.PI;
        this.percent = options.percent;
        this.s.attr({
            width: options.width,
            height: options.height
        });
        this.baseCircle = this.s.circle(cx, cy, radius);
        this.baseCircle.attr({
            fill: 'none',
            stroke: '#dfdcd5',
            strokeWidth: 14
        });
        this.bgCircle = this.s.circle(cx, cy, radius);
        this.bgCircle.transform('r-90,' + cx + ',' + cy);
        this.bgCircle.attr({
            fill: 'none',
            stroke: '#1bb696',
            strokeWidth: 14,
            strokeDasharray: this.length,
            strokeDashoffset: this.length
        });
    }
    draw() {
        Snap.animate(this.length, (1 - this.percent) * this.length,
            (val) => {
                this.bgCircle.attr({
                    strokeDashoffset: val
                });
            }, 700, mina.easeinout);
    }
}
const html = new createSkill({ width: 140, height: 140, container: '#html', percent: 0.95 });
const css = new createSkill({ width: 140, height: 140, container: '#css', percent: 0.90 });
const js = new createSkill({ width: 140, height: 140, container: '#js', percent: 0.12 });
const php = new createSkill({ width: 140, height: 140, container: '#php', percent: 0.20 });
const mySQL = new createSkill({ width: 140, height: 140, container: '#mySQL', percent: 0.50 });
const node = new createSkill({ width: 140, height: 140, container: '#node', percent: 0.99 });
const mongo = new createSkill({ width: 140, height: 140, container: '#mongo', percent: 0.32 });
const git = new createSkill({ width: 140, height: 140, container: '#git', percent: 0.100 });
const gulp = new createSkill({ width: 140, height: 140, container: '#gulp', percent: 0.22 });
const bower = new createSkill({ width: 140, height: 140, container: '#bower', percent: 0.10 });

var skills = function () {
    html.draw();
    css.draw();
    js.draw();
    php.draw();
    mySQL.draw();
    node.draw();
    mongo.draw();
    git.draw();
    gulp.draw();
    bower.draw();
}
}
export {skills};

