>## Dependencies

> ### Main - 
> - yarn add express zod config cors express mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid

> ### Developmemt - 
> - yarn add @types/body-parser @types/config @types/cors @types/express @types/node @types/pino @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node-dev typescript -D


> Don't forget to `tsc init`


>## Testing Dependencies
> - yarn add supertest jest ts-jest @types/jest @types/supertest -D


> npx ts-jest config:init `To configure jest`

```
To run test - npm run test
                (script added in package.json 
                    "test": "jest")
            - npx jest --watchAll
                (run test in watch mode)
```

> - We can use `npx jest --watchAll --detectOpenHandles` to check if there are any open handles
