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

export async function POST() {
  return methodNotAllowedResponse();
}

export async function PUT() {
  return methodNotAllowedResponse();
}

export async function PATCH() {
  return methodNotAllowedResponse();
}

export async function DELETE() {
  return methodNotAllowedResponse();
}
