import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutBuilderComponent } from './workout-builder.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutComponent } from './workout/workout.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
  {
    path: 'builder',
    component: WorkoutBuilderComponent,
    children: [
         {path: '', pathMatch: 'full', redirectTo: 'workouts'},
         {path: 'workouts', component: WorkoutsComponent },
         {path: 'workout/new',  component: WorkoutComponent },
         {path: 'workout/:id', component: WorkoutComponent },
         {path: 'exercises', component: ExercisesComponent},
         {path: 'exercise/new', component: ExerciseComponent },
         {path: 'exercise/:id', component: ExerciseComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutBuilderRoutingModule { }