import React, { useState } from 'react';
import { 
  FiHome, 
  FiBook, 
  FiCalendar, 
  FiMessageSquare, 
  FiSettings, 
  FiUser, 
  FiBell, 
  FiSearch,
  FiChevronDown,
  FiMenu,
  FiX,
  FiStar,
  FiClock,
  FiCheckCircle
} from 'react-icons/fi';

// Types
interface Course {
  id: number;
  title: string;
  instructor: string;
  progress: number;
  duration: string;
  category: string;
  thumbnail: string;
  lastAccessed: string;
}

interface Lesson {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
}

interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
}

// Mock data
const courses: Course[] = [
  {
    id: 1,
    title: "Advanced JavaScript Concepts",
    instructor: "Sarah Johnson",
    progress: 75,
    duration: "12 hours",
    category: "Programming",
    thumbnail: "https://source.unsplash.com/random/300x200/?javascript",
    lastAccessed: "2 days ago"
  },
  {
    id: 2,
    title: "UI/UX Design Principles",
    instructor: "Michael Chen",
    progress: 40,
    duration: "8 hours",
    category: "Design",
    thumbnail: "https://source.unsplash.com/random/300x200/?design",
    lastAccessed: "5 days ago"
  },
  {
    id: 3,
    title: "Data Science Fundamentals",
    instructor: "Emily Rodriguez",
    progress: 20,
    duration: "15 hours",
    category: "Data Science",
    thumbnail: "https://source.unsplash.com/random/300x200/?data",
    lastAccessed: "1 week ago"
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    instructor: "David Wilson",
    progress: 90,
    duration: "10 hours",
    category: "Marketing",
    thumbnail: "https://source.unsplash.com/random/300x200/?marketing",
    lastAccessed: "Yesterday"
  }
];

const modules: Module[] = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    lessons: [
      { id: 1, title: "What is JavaScript?", duration: "15 min", completed: true },
      { id: 2, title: "Setting Up Your Environment", duration: "20 min", completed: true },
      { id: 3, title: "Variables and Data Types", duration: "30 min", completed: true },
      { id: 4, title: "Functions and Scope", duration: "25 min", completed: false },
    ]
  },
  {
    id: 2,
    title: "Advanced Concepts",
    lessons: [
      { id: 5, title: "Closures and Prototypes", duration: "35 min", completed: false },
      { id: 6, title: "Asynchronous JavaScript", duration: "40 min", completed: false },
      { id: 7, title: "ES6 Features", duration: "30 min", completed: false },
    ]
  },
  {
    id: 3,
    title: "Real World Applications",
    lessons: [
      { id: 8, title: "Building a Todo App", duration: "50 min", completed: false },
      { id: 9, title: "API Integration", duration: "45 min", completed: false },
      { id: 10, title: "Debugging Techniques", duration: "30 min", completed: false },
    ]
  }
];

const LMSDashboard: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course>(courses[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeModule, setActiveModule] = useState<number>(1);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed md:relative z-30 inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition duration-200 ease-in-out bg-white w-64 border-r border-gray-200 flex flex-col h-full`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className='flex items-center justify-center gap-2'>
            <img src='/logo.png' className='w-10 h-10'/>
            <h1 className='font-semibold text-lg '>ERPBUGS</h1>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-500 hover:text-gray-700"
          >
            <FiX size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <nav className="p-4">
            <div className="mb-6">
              <h2 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">Main</h2>
              <ul>
                <li className="mb-2">
                  <a href="#" className="flex items-center p-2 text-blue-600 bg-blue-50 rounded-lg">
                    <FiHome className="mr-3" />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                    <FiBook className="mr-3" />
                    <span>My Courses</span>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                    <FiCalendar className="mr-3" />
                    <span>Schedule</span>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                    <FiMessageSquare className="mr-3" />
                    <span>Messages</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">My Courses</h2>
              <ul>
                {courses.map(course => (
                  <li key={course.id} className="mb-2">
                    <button 
                      onClick={() => setSelectedCourse(course)}
                      className={`w-full flex items-center p-2 text-left rounded-lg ${selectedCourse.id === course.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{course.title}</p>
                        <p className="text-xs text-gray-500 truncate">{course.instructor}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">Account</h2>
              <ul>
                <li className="mb-2">
                  <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                    <FiUser className="mr-3" />
                    <span>Profile</span>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                    <FiSettings className="mr-3" />
                    <span>Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="md:hidden text-gray-500 hover:text-gray-700 mr-4"
              >
                <FiMenu size={20} />
              </button>
              <div className="relative max-w-xs w-full md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 focus:outline-none">
                <FiBell size={20} />
              </button>
              <div className="ml-4 relative">
                <button className="flex items-center focus:outline-none">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                    JS
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">John Smith</span>
                  <FiChevronDown className="ml-1 text-gray-500 hidden md:block" />
                </button>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Course Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <img 
                    src={selectedCourse.thumbnail} 
                    alt={selectedCourse.title}
                    className="h-32 w-full object-cover rounded-lg md:w-48"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedCourse.title}</h2>
                      <p className="text-gray-600 mt-1">Instructor: {selectedCourse.instructor}</p>
                      <div className="flex items-center mt-2">
                        <div className="flex items-center text-yellow-400">
                          <FiStar className="fill-current" />
                          <FiStar className="fill-current" />
                          <FiStar className="fill-current" />
                          <FiStar className="fill-current" />
                          <FiStar className="text-gray-300" />
                        </div>
                        <span className="ml-2 text-sm text-gray-500">4.0 (128 reviews)</span>
                      </div>
                    </div>
                    <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                      Continue Learning
                    </button>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Progress: {selectedCourse.progress}%</span>
                      <span className="text-sm text-gray-500">{selectedCourse.duration}</span>
                    </div>
                    <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${selectedCourse.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <FiClock className="mr-1" />
                    <span>Last accessed: {selectedCourse.lastAccessed}</span>
                  </div>
                  
                  <button className="mt-4 md:hidden w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Continue Learning
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Course Content */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Course Content</h3>
                  
                  <div className="space-y-4">
                    {modules.map(module => (
                      <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button 
                          onClick={() => setActiveModule(activeModule === module.id ? 0 : module.id)}
                          className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100"
                        >
                          <div className="flex items-center">
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${activeModule === module.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                              {module.id}
                            </div>
                            <span className="font-medium">{module.title}</span>
                          </div>
                          <FiChevronDown className={`transform ${activeModule === module.id ? 'rotate-180' : ''} transition-transform`} />
                        </button>
                        
                        {activeModule === module.id && (
                          <div className="p-4 border-t border-gray-200">
                            <ul className="space-y-3">
                              {module.lessons.map(lesson => (
                                <li key={lesson.id} className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    {lesson.completed ? (
                                      <FiCheckCircle className="text-green-500 mr-3" />
                                    ) : (
                                      <div className="h-5 w-5 rounded-full border border-gray-300 mr-3"></div>
                                    )}
                                    <span className={lesson.completed ? 'text-gray-500 line-through' : 'text-gray-700'}>
                                      {lesson.title}
                                    </span>
                                  </div>
                                  <span className="text-sm text-gray-500">{lesson.duration}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Upcoming Events & Progress */}
              <div className="lg:w-1/3 space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Events</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-lg p-2 mr-3">
                        <FiCalendar size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Live Q&A Session</p>
                        <p className="text-sm text-gray-500">Tomorrow, 3:00 PM - 4:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-green-100 text-green-600 rounded-lg p-2 mr-3">
                        <FiBook size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Assignment Due</p>
                        <p className="text-sm text-gray-500">In 3 days - JavaScript Project</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Your Progress</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Modules Completed</span>
                        <span className="text-sm text-gray-500">1/3</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '33%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Lessons Completed</span>
                        <span className="text-sm text-gray-500">3/10</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Overall Grade</span>
                        <span className="text-sm text-gray-500">-</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LMSDashboard;