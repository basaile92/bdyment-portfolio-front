export interface CommandDto {
  command: string;
  usages: Usage[];
}

interface Usage {
  parameter: string;
  description: string;
}
