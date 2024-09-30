import Link from "next/link";

interface PaginationProps {
  section: string;
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ section, currentPage, totalPages }: PaginationProps) {
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;

  const pageList = [];
  for (let i = 1; i <= totalPages; i++) pageList.push(i);

  return (
    totalPages > 1 && (
      <nav className="mb-4 mt-14 flex items-center justify-center" aria-label="Pagination">
        {/* previous */}
        {hasPrevPage ? (
          <Link
            href={
              indexPageLink
                ? `${section ? "/" + section : "/"}`
                : `${section ? "/" + section : ""}/page/${currentPage - 1}`
            }
            className="mr-5 flex items-center rounded-full border px-4 py-2 text-dark hover:shadow-lg md:px-6 md:py-3"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Previous</span>
          </Link>
        ) : (
          <span className="mr-5 flex min-w-[150px] items-center rounded-[50px] border-white bg-white px-4 py-2 text-center capitalize text-text md:px-6 md:py-3 ">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Previous</span>
          </span>
        )}

        {/* page index */}
        {pageList.map((pagination, i) =>
          pagination === currentPage ? (
            <span
              key={`pgn-${i}`}
              aria-current="page"
              className="mx-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white md:h-12  md:w-12"
            >
              {pagination}
            </span>
          ) : (
            <Link
              key={`pgn-${i}`}
              href={
                i === 0
                  ? `${section ? "/" + section : "/"}`
                  : `${section ? "/" + section : ""}/page/${pagination}`
              }
              aria-current="page"
              className="mx-1 flex h-10 w-10 items-center justify-center rounded-full border bg-white text-dark hover:bg-primary hover:text-white md:h-12 md:w-12"
            >
              {pagination}
            </Link>
          )
        )}

        {/* next page */}
        {hasNextPage ? (
          <Link
            href={`${section ? "/" + section : ""}/page/${currentPage + 1}`}
            className="ml-5 flex items-center rounded-full border px-4 py-2 text-dark hover:shadow-lg md:px-6 md:py-3"
          >
            <span>Next</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        ) : (
          <span className="ml-5 flex min-w-0 items-center rounded-[50px]  border-white bg-white px-4 py-2 text-center capitalize text-text md:px-6 md:py-3 ">
            <span>Next</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        )}
      </nav>
    )
  );
}
