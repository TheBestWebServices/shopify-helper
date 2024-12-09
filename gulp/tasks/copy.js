import { dest, src, task } from 'gulp';
import gulpDebug           from 'gulp-debug';

export default function() {
  task('copy', () => {
    return src(['src/**'])
      .pipe(gulpDebug({ 'title': 'copying files...' }))
      .pipe(dest('public'));
  });
}
