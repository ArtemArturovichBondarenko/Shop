import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snack = inject(MatSnackBar);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const message =
        typeof error?.error?.message === 'string'
          ? error.error.message
          : `HTTP ${error.status}: ${error.statusText || 'Error'}`;

      snack.open(message, 'OK', {
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });

      return throwError(() => error);
    })
  );
};
