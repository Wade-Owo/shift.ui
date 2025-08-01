

export default function Dashboard() {

  const counter = 300

  return (
    <div className="flex flex-col min-h-screen">
        <main className="p-6 space-y-25">
          {/* Label */}
          <div className="flex justify-center items-center">
              <div>
                  <h1 className="text-4xl font-semibold">
                      Dashboard
                  </h1>
              </div>
          </div>
        </main>
        
        {/* timeoff title */}
        <div className="breadcrumbs text-m mb-3">
          <ul>
            <li><a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Time Off</a></li>
            <li></li>
          </ul>
        </div>

        {/* PTO remaining */}

        <div className="flex flex-row">
          {/* pto logo */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M10.5 8.25h3l-3 4.5h3" />
            </svg>
            PTO

          {/* number of hours remaining */}
            <span className="badge ml-5">70h</span>
        </div>


        <div className="carousel carousel-center rounded-box w-full h-full">
          <div className="carousel-item">
            <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Pizza" />
          </div>
        </div>
    </div>
  )
}
