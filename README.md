# PoC of the Supabase with Tanstack Router

This is a PoC of Supabase Auth with Tanstack Router an session management.
- magic link auth
- anonymous auth + linkin email to account
- auth state stored in router context. Router being updated and invalidated on auth state change. 
- auth state change handled asynchronously

## How to run
- Just start the app and clone `.env.template` to `.env` and fill in the values
- In Supabase Auth settings > URL Configuration, add allowing urls: `http://localhost:5173/auth/otp-callback**` and `http://localhost:5173/auth/link-account`