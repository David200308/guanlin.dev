import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";

// PDF path for the resume
const pdfPath = "/Resume-Guanlin-Jiang.pdf";

// Configure PDF.js worker for react-pdf v10
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ResumeNew: React.FC = () => {
  const [width, setWidth] = useState<number>(1200);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    
    // Add timeout for PDF loading
    const timeoutId = setTimeout(() => {
      if (loading) {
        setError('PDF loading timed out. Please check your internet connection and try again.');
        setLoading(false);
      }
    }, 15000); // 15 second timeout

    return () => clearTimeout(timeoutId);
  }, [loading]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('PDF load error:', error);
    setError('Failed to load PDF file. Please try refreshing the page or use the download button below.');
    setLoading(false);
  };

  // Fallback content when PDF fails to load
  const renderFallbackContent = () => (
    <div className="text-center p-4">
      <h4>Resume Preview Unavailable</h4>
      <p className="text-muted mb-3">
        The PDF preview couldn't be loaded. Please use the download button to view your resume.
      </p>
      <Button 
        variant="primary" 
        href={pdfPath} 
        target="_blank"
        size="lg"
      >
        <AiOutlineDownload />
        &nbsp;Download Resume
      </Button>
    </div>
  );

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          {error ? (
            renderFallbackContent()
          ) : (
            <>
              {loading && (
                <div className="text-center mb-3">
                  <p>Loading PDF...</p>
                </div>
              )}

              <Document 
                file={pdfPath} 
                className="d-flex justify-content-center"
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading="Loading PDF..."
                error="Failed to load PDF file."
              >
                <Page 
                  pageNumber={pageNumber} 
                  scale={width > 786 ? 1.7 : 0.6}
                  loading="Loading page..."
                  error="Failed to load page."
                />
              </Document>
            </>
          )}

          {numPages && numPages > 1 && (
            <div className="text-center mt-3">
              <Button 
                variant="outline-secondary" 
                onClick={previousPage} 
                disabled={pageNumber <= 1}
                className="me-2"
              >
                Previous
              </Button>
              <span className="mx-3">
                Page {pageNumber} of {numPages}
              </span>
              <Button 
                variant="outline-secondary" 
                onClick={nextPage} 
                disabled={pageNumber >= numPages}
                className="ms-2"
              >
                Next
              </Button>
            </div>
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default ResumeNew;
