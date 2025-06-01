import { NextResponse } from "next/server";

export const captilizeFirstLetter = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.substring(1);
};

export const ApiResponse = (jsonBody: unknown, status: number) => {
  return NextResponse.json(jsonBody, { status });
};
