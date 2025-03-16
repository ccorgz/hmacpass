declare module "hmacpass" {
  export function createPass(pass: string): {
    hash: string;
    salt: string;
  };
  export function validatePass(
    pass: string,
    hash: string,
    salt: string
  ): boolean;
}
