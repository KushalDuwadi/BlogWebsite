import React, { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../../assets/assets";
import BlogTableItem from "../../../components/admin/BlogTableItem/BlogTableItem";
import "./Dashboard.css";
import { useAppContext } from "../../../context/AppContext";
import toast from "react-hot-toast";

const Dashboard = () => {
  
  
  
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  });
  const{axios} = useAppContext();

 const fetchDashboard = async () => {
  try {
    // setLoading(true);
    const { data } = await axios.get("/api/admin/dashboard");
    if (data.success) setDashboardData(data.dashboardData);
    else toast.error(data.message);
  } catch (error) {
    toast.error(error.message);
  }
};

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="dashboard">

      {/* ===== Stats Cards ===== */}
      <div className="dashboard-cards">

        <div className="card">
          <img src={assets.dashboard_icon_1} alt="blogs icon" />
          <div>
            <p>{dashboardData.blogs}</p>
            <span>Total Blogs</span>
          </div>
        </div>

        <div className="card">
          <img src={assets.dashboard_icon_2} alt="comments icon" />
          <div>
            <p>{dashboard_data.comments}</p>
            <span>Comments</span>
          </div>
        </div>

        <div className="card">
          <img src={assets.dashboard_icon_3} alt="draft icon" />
          <div>
            <p>{dashboardData.drafts}</p>
            <span>Drafts</span>
          </div>
        </div>

      </div>

      {/* ===== Latest Blogs Header ===== */}
      <div className="latest-header">
        <img src={assets.dashboard_icon_4} alt="latest icon" />
        <p>Latest Blogs</p>
      </div>

      {/* ===== Latest Blogs Table ===== */}
      <div className="latest-blogs-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Blog Title</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {dashboardData.recentBlogs.length > 0 ? (
              dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchDashboard}
                  index={index + 1}
                />
              ))
             ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                  No recent blogs found
                </td>
              </tr> 
            )}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default Dashboard;