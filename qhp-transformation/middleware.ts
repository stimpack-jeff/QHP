import { NextResponse, type NextRequest } from "next/server";

const LEADERBOARD_USER = "qhp";
const PASS_HASH = "332c42516810ce097d130814bb36ff39c8dd4d6b51d3928c0b33b3232afa83b3";

async function sha256(message: string) {
  const data = new TextEncoder().encode(message);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="QHP Leaderboard"',
    },
  });
}

export async function middleware(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader?.startsWith("Basic ")) {
    return unauthorized();
  }

  try {
    const base64Credentials = authHeader.split(" ")[1] ?? "";
    const decoded = atob(base64Credentials);
    const separatorIndex = decoded.indexOf(":");

    if (separatorIndex === -1) {
      return unauthorized();
    }

    const username = decoded.slice(0, separatorIndex);
    const password = decoded.slice(separatorIndex + 1);

    if (username !== LEADERBOARD_USER) {
      return unauthorized();
    }

    if ((await sha256(password)) !== PASS_HASH) {
      return unauthorized();
    }

    return NextResponse.next();
  } catch {
    return unauthorized();
  }
}

export const config = {
  matcher: ["/leaderboard/:path*"],
};