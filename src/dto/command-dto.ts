export interface CommandDto {
  command: string;
  usages: UsageDto[];
}

export interface UsageDto {
  parameter: string;
  description: string;
}
