import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Development</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Node.js</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">MongoDB</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">REST API</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Prisma</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Supabase</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Express.js</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">PostgreSQL</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">GraphQL</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">JWT</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">AWS S3</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
