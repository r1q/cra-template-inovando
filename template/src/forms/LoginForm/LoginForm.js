import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus';
import { TextField } from 'final-form-material-ui';
import Button from '@material-ui/core/Button';

import { validate } from 'utils/validate';
import { schema } from './schema';
import { Box, Link, Grid } from '@material-ui/core';

const focusOnErrors = createDecorator();

function LoginForm({ onSubmit }) {
  return (
    <Form
      onSubmit={onSubmit}
      decorators={[focusOnErrors]}
      validate={validate(schema)}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Field
            name="email"
            type="text"
            component={TextField}
            label="E-mail"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <Field
            name="password"
            type="password"
            component={TextField}
            label="Password"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Link
              align="right"
              component={RouterLink}
              to="/esqueci-minha-senha"
            >
              Esqueci minha senha
            </Link>
          </Grid>

          <Box mt={3}>
            <Button
              disabled={submitting}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Enviar
            </Button>
          </Box>
        </form>
      )}
    />
  );
}

export default LoginForm;
