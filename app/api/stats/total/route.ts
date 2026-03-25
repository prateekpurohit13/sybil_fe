import {
  handleApiError,
  jsonResponse,
  methodNotAllowedResponse,
  optionsResponse,
} from "@/lib/api-response";

const totalStats = {
  total: 15420,
  malicious: 234,
  suspicious: 892,
  clean: 14294,
};

export async function OPTIONS() {
  return optionsResponse();
}

export async function GET() {
  try {
    return jsonResponse(totalStats);
  } catch (error) {
    return handleApiError(error);
  }
}

export const POST = methodNotAllowedResponse;
export const PUT = methodNotAllowedResponse;
export const PATCH = methodNotAllowedResponse;
export const DELETE = methodNotAllowedResponse;
