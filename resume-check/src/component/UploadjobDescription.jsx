import React, { useState } from "react";
import "./uploadescription.css";
const UploadjobDescription = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleResumesChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const removeFile = (indexToRemove) => {
    const filterFiles = selectedFiles.filter(
      (_, index) => index !== indexToRemove
    );
    setSelectedFiles(filterFiles);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2>Job Description and Resume Matcher</h2>
        </div>

        <div className="card-body">
          {/*Job Description part*/}
          <form action="/xyz" method="post" encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="job_Description">Job Description</label>
              <textarea
                name="job_Description"
                id="job_Description"
                className="form-control"
                rows={6}
              ></textarea>
            </div>

            {/*Resume Upload*/}
            <div className="form-group">
              <label htmlFor="resumes">Upload Resumes</label>
              <input
                type="file"
                multiple
                className="form-control"
                name="resumes"
                id="resumes"
                required
                accept=".pdf, .docx, .txt"
                onChange={handleResumesChange}
              />

              <div className="custom-file-display">
                {selectedFiles.length === 0 ? (
                  <span>No files chosen</span>
                ) : (
                  selectedFiles.map((file, index) => (
                    <span key={index} className="file-chip">
                      {file.name}
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => removeFile(index)}
                      >
                        &times;
                      </button>
                    </span>
                  ))
                )}
              </div>
              
            </div>
            <button type="submit" className="btn btn-primary">
              Match Resume
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadjobDescription;
