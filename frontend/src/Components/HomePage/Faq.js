import React from 'react';

const Faq = () => {
  return (
    <section className="bg-light py-5" id="faq">
        <div className="container text-center">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">How do I sign up?</h5>
                  <p className="card-text">Simply click on the "Sign Up" button and follow the registration process.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Can I upgrade my plan later?</h5>
                  <p className="card-text">Yes, you can upgrade your plan anytime through your account settings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Faq;
