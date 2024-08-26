import React, { useState } from 'react';
import './ResourceRequest.css'; // Import the CSS file

function ResourceRequestForm() {
  // State variables to manage the form data
  const [resourceName, setResourceName] = useState('');
  const [casNumber, setCasNumber] = useState('');
  const [odours, setOdours] = useState('');
  const [pyramid, setPyramid] = useState('');
  const [notes, setNotes] = useState('');
  const [isComponent, setIsComponent] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Log the form data or send it to an API
    console.log({
      resourceName,
      casNumber,
      odours,
      pyramid,
      notes,
      isComponent,
    });
  };

  return (
    <div className="form-container">
      <h2>New Resource Request</h2>
      <form onSubmit={handleSubmit}>
        {/* Resource Name Field */}
        <div className="form-group">
          <label>Resource Name*</label>
          <input
            type="text"
            value={resourceName}
            onChange={(e) => setResourceName(e.target.value)}
            required
          />
        </div>

        {/* Resource Category Field */}
        <div className="form-group">
          <label>Resource Category</label>
          <input
            type="text"
            value="Perfumery Raw Material"
            readOnly
          />
        </div>

        {/* CAS No. Field */}
        <div className="form-group">
          <label>CAS No.</label>
          <input
            type="text"
            value={casNumber}
            onChange={(e) => setCasNumber(e.target.value)}
          />
        </div>

        {/* Component Checkbox */}
        <div className="form-group">
          <label>Component</label>
          <input
            type="checkbox"
            checked={isComponent}
            onChange={() => setIsComponent(!isComponent)}
          />
        </div>

        {/* Odour(s) Field */}
        <div className="form-group">
          <label>Odour(s)</label>
          <input
            type="text"
            value={odours}
            onChange={(e) => setOdours(e.target.value)}
          />
        </div>

        {/* Pyramid Dropdown */}
        <div className="form-group">
          <label>Pyramid</label>
          <select
            value={pyramid}
            onChange={(e) => setPyramid(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Top">Top</option>
            <option value="Middle">Middle</option>
            <option value="Base">Base</option>
          </select>
        </div>

        {/* Notes Field */}
        <div className="form-group">
          <label>Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="form-actions">
          <button type="button" onClick={() => console.log('Cancel')}>Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ResourceRequestForm;
