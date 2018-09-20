export default function robotMiddleware() {
  return async (next: any) => {
    await next();
  };
}
