'use strict';

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  // If there are no prerequisites, true
  if (prerequisites.length === 0) return true;

  // Construct hashmap of course to prerequisite courses
  let courses = {};
  for (let [course, prereq] of prerequisites) {
    if (course in courses) {
      courses[course].push(prereq);
    } else {
      courses[course] = [prereq];
    }
  }

  // Construct set of courses that can be taken
  // At this moment it is any course without prereqs
  let canTake = new Set(
    [...Array(numCourses).keys()]
      .filter(course => !(course in courses))
  );

  for (let course in courses) {
    if (!_canTakeCourse(Number(course))) return false;
  }

  function _canTakeCourse(course, checked = new Set()) {
    if (canTake.has(course)) return true;

    // Need to check its prereqs
    let prereqLeft = courses[course].length;
    checked.add(course);

    for (let prereq of courses[course]) {
      if (checked.has(prereq)) return false; // Loop detected

      if (canTake.has(prereq) || _canTakeCourse(prereq, new Set([...checked]))) {
        prereqLeft--;
      } else {
        return false;
      }
    }

    if (prereqLeft > 0) return false;

    canTake.add(course);
    return true;
  }

  return true;
}

// Topological sort approach
// function canFinish(numCourses, prerequisites) {
//   // If there are no prerequisites, true
//   if (prerequisites.length === 0) return true;

//   // Construct array of dependent courses
//   let dependents = new Array(numCourses).fill(undefined).map(() => []);

//   // Construct array of indegrees - a measure of how many nodes point to a node
//   let indegrees = new Array(numCourses).fill(0);

//   for (let [course, prereq] of prerequisites) {
//       // For dependents
//       dependents[prereq].push(course);

//       // For indegrees
//       indegrees[course]++;
//   }

//   while (indegrees.includes(0)) {
//       let topCourse = indegrees.indexOf(0);
//       indegrees[topCourse] = Infinity;

//       for (let course of dependents[topCourse]) {
//           indegrees[course]--;
//       }
//   }

//   return indegrees.every(val => val === Infinity);
// }