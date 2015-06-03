# reactive-method-issue-10
reproduction for [simple:reactive-method issue number 10](https://github.com/stubailo/meteor-reactive-method/issues/10)

Found live at http://reactive-method-issue-10.meteor.com

##To reproduce:
1. Clone Repo
2. Start application with `meteor`
3. Open browser to `localhost:3000`
4. Open console
5. Click `invalidate` button

## Expected
`ReactiveMethod._computations["[\"someMethod\",[\"a\"]]"]` should exist after invalidate. Only `_reactiveMethodData` property should be deleted [here](https://github.com/stubailo/meteor-reactive-method/blob/master/reactive-method.js#L122)

## Actual
`ReactiveMethod._computations["[\"someMethod\",[\"a\"]]"]` is undefined after method is re-run.
