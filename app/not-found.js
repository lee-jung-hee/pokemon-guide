
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">페이지를 찾을 수 없습니다.</p>
      <Link href="/">
        <div className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          홈으로 돌아가기
        </div>
      </Link>
    </div>
  );
}
