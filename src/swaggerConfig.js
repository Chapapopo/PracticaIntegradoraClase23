import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API REST Documentation',
      version: '1.0.0',
      description: 'API documentation with Swagger',
    },
  },
  apis: ['./routes/Routes','./routes/auth.Routes','./routes/cart.Routes','./routes/chat.Routes','./routes/current.Routes','./routes/log.Routes','./routes/login.Routes','./routes/logout.Routes','./routes/make.Routes','./routes/mocking.Routes','./routes/passwordReset.Routes'],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
