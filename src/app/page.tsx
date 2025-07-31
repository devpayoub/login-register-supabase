"use client";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user, logout, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Welcome to Your Dashboard
              </h1>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Logout
              </button>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                User Information
              </h2>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Email:</span> {user.email}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">User ID:</span> {user.id}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Last Sign In:</span>{" "}
                  {new Date(user.last_sign_in_at || user.created_at).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Account Status
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  Your account is active and ready to use.
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                  Authentication
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  Successfully authenticated with Supabase.
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  Next Steps
                </h3>
                <p className="text-purple-700 dark:text-purple-300">
                  Start building your application features here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
