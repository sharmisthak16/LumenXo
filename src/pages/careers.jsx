import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Briefcase, 
  Star, 
  ArrowRight, 
  Search,
  Filter,
  Heart,
  Award,
  Coffee,
  Zap,
  Globe,
  TrendingUp,
  Code,
  Palette,
  Server,
  Megaphone,
  Shield,
  Headphones,
  Building,
  Target,
  Rocket,
  CheckCircle,
  Play,
  ChevronDown,
  ExternalLink,
  Calendar,
  BookOpen,
  Lightbulb,
  PieChart,
  Settings,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';
import Navbar from './Navbar';


const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('jobs');
  const [expandedJob, setExpandedJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const departments = [
    'All', 'Engineering', 'Product', 'Design', 'Marketing', 'Sales', 'Operations', 'HR', 'Finance', 'Legal'
  ];

  const locations = [
    'All', 'Remote', 'New York, NY', 'San Francisco, CA', 'London, UK', 'Toronto, CA', 'Berlin, DE', 'Singapore, SG'
  ];

  const jobTypes = [
    'All', 'Full-time', 'Part-time', 'Contract', 'Internship'
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$150,000 - $200,000',
      experience: '5+ years',
      description: 'Lead the development of scalable web applications using modern technologies. Work with cross-functional teams to deliver high-quality software solutions.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '5+ years of experience in full-stack development',
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, GCP, or Azure)',
        'Strong problem-solving and communication skills',
        'Experience with agile development methodologies'
      ],
      responsibilities: [
        'Design and implement scalable software solutions',
        'Mentor junior developers and conduct code reviews',
        'Collaborate with product managers and designers',
        'Participate in architectural decisions and technical planning'
      ],
      benefits: ['Health Insurance', 'Stock Options', '401(k)', 'Flexible PTO', 'Remote Work'],
      icon: Code,
      color: 'blue',
      urgent: true,
      team: 'Platform Engineering',
      posted: '2 days ago',
      applicants: 45
    },
    {
      id: 2,
      title: 'Product Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      experience: '3+ years',
      description: 'Create intuitive and beautiful user experiences for our digital products. Work closely with product and engineering teams to bring designs to life.',
      requirements: [
        'Bachelor\'s degree in Design, HCI, or related field',
        '3+ years of product design experience',
        'Proficiency in Figma, Sketch, and Adobe Creative Suite',
        'Strong portfolio demonstrating UX/UI design skills',
        'Experience with design systems and prototyping',
        'Understanding of front-end development principles'
      ],
      responsibilities: [
        'Design user interfaces for web and mobile applications',
        'Conduct user research and usability testing',
        'Create and maintain design systems',
        'Collaborate with cross-functional teams'
      ],
      benefits: ['Health Insurance', 'Design Budget', 'Learning Stipend', 'Flexible Hours', 'Transit Benefits'],
      icon: Palette,
      color: 'purple',
      urgent: false,
      team: 'Product Design',
      posted: '1 week ago',
      applicants: 32
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$140,000 - $180,000',
      experience: '4+ years',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines. Ensure high availability and scalability of our systems.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of DevOps/Infrastructure experience',
        'Expertise in Kubernetes, Docker, and CI/CD',
        'Experience with AWS, GCP, or Azure',
        'Knowledge of Infrastructure as Code (Terraform, CloudFormation)',
        'Strong scripting skills (Python, Bash, Go)'
      ],
      responsibilities: [
        'Design and maintain cloud infrastructure',
        'Implement CI/CD pipelines and automation',
        'Monitor system performance and reliability',
        'Collaborate with development teams on deployment strategies'
      ],
      benefits: ['Health Insurance', 'Stock Options', 'Home Office Stipend', 'Conference Budget', 'Flexible PTO'],
      icon: Server,
      color: 'green',
      urgent: true,
      team: 'Infrastructure',
      posted: '3 days ago',
      applicants: 28
    },
    {
      id: 4,
      title: 'Product Manager',
      department: 'Product',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£80,000 - £120,000',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our core platform. Work with engineering, design, and business teams to deliver exceptional user experiences.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '4+ years of product management experience',
        'Strong analytical and data-driven decision making skills',
        'Experience with agile development methodologies',
        'Excellent communication and leadership skills',
        'Technical background preferred'
      ],
      responsibilities: [
        'Define product vision and strategy',
        'Manage product roadmap and prioritization',
        'Work with engineering teams on feature development',
        'Analyze user feedback and market trends'
      ],
      benefits: ['Health Insurance', 'Stock Options', 'Learning Budget', 'Flexible Hours', 'Pension Scheme'],
      icon: TrendingUp,
      color: 'indigo',
      urgent: false,
      team: 'Product Strategy',
      posted: '5 days ago',
      applicants: 41
    },
    {
      id: 5,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Toronto, CA',
      type: 'Full-time',
      salary: 'CAD $90,000 - $120,000',
      experience: '3+ years',
      description: 'Lead digital marketing initiatives to drive brand awareness and customer acquisition. Develop and execute comprehensive marketing campaigns.',
      requirements: [
        'Bachelor\'s degree in Marketing, Communications, or related field',
        '3+ years of digital marketing experience',
        'Proficiency in marketing automation tools',
        'Strong analytical skills and data interpretation',
        'Experience with SEO, SEM, and social media marketing',
        'Excellent written and verbal communication skills'
      ],
      responsibilities: [
        'Develop and execute marketing campaigns',
        'Manage social media presence and content strategy',
        'Analyze campaign performance and ROI',
        'Collaborate with sales team on lead generation'
      ],
      benefits: ['Health Insurance', 'Marketing Budget', 'Professional Development', 'Flexible PTO', 'Transit Benefits'],
      icon: Megaphone,
      color: 'orange',
      urgent: false,
      team: 'Growth Marketing',
      posted: '1 week ago',
      applicants: 37
    },
    {
      id: 6,
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      salary: '$60,000 - $80,000 + Commission',
      experience: '1+ years',
      description: 'Generate and qualify leads for our sales team. Build relationships with prospects and help drive revenue growth.',
      requirements: [
        'Bachelor\'s degree preferred',
        '1+ years of sales or customer-facing experience',
        'Strong communication and interpersonal skills',
        'Experience with CRM systems (Salesforce preferred)',
        'Goal-oriented and self-motivated',
        'Ability to work in a fast-paced environment'
      ],
      responsibilities: [
        'Prospect and qualify potential customers',
        'Conduct outbound calls and emails',
        'Schedule meetings for Account Executives',
        'Maintain accurate records in CRM system'
      ],
      benefits: ['Health Insurance', 'Commission Structure', 'Sales Training', 'Career Growth', 'Team Events'],
      icon: Headphones,
      color: 'cyan',
      urgent: false,
      team: 'Sales Development',
      posted: '4 days ago',
      applicants: 52
    },
    {
      id: 7,
      title: 'Data Scientist',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$130,000 - $170,000',
      experience: '3+ years',
      description: 'Analyze complex datasets to drive business insights and build predictive models. Work with cross-functional teams to implement data-driven solutions.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '3+ years of data science experience',
        'Proficiency in Python, R, and SQL',
        'Experience with machine learning frameworks',
        'Strong statistical analysis skills',
        'Experience with data visualization tools'
      ],
      responsibilities: [
        'Develop predictive models and algorithms',
        'Analyze large datasets for business insights',
        'Create data visualizations and reports',
        'Collaborate with product and engineering teams'
      ],
      benefits: ['Health Insurance', 'Stock Options', 'Learning Budget', 'Conference Attendance', 'Flexible PTO'],
      icon: PieChart,
      color: 'teal',
      urgent: false,
      team: 'Data & Analytics',
      posted: '6 days ago',
      applicants: 29
    },
    {
      id: 8,
      title: 'UX Researcher',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      salary: '$110,000 - $140,000',
      experience: '3+ years',
      description: 'Conduct user research to inform product decisions and improve user experiences. Design and execute research studies across multiple touchpoints.',
      requirements: [
        'Bachelor\'s degree in Psychology, HCI, or related field',
        '3+ years of UX research experience',
        'Experience with qualitative and quantitative research methods',
        'Proficiency in research tools and analytics platforms',
        'Strong presentation and storytelling skills',
        'Experience working with cross-functional teams'
      ],
      responsibilities: [
        'Plan and conduct user research studies',
        'Analyze research data and present insights',
        'Collaborate with design and product teams',
        'Maintain research repository and guidelines'
      ],
      benefits: ['Health Insurance', 'Research Budget', 'Conference Attendance', 'Flexible Hours', 'Home Office Stipend'],
      icon: Lightbulb,
      color: 'yellow',
      urgent: false,
      team: 'User Research',
      posted: '1 week ago',
      applicants: 24
    }
  ];

  const companyValues = [
    {
      
      title: 'Innovation Excellence',
      description: 'We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'We believe in the power of diverse teams working together towards common goals.',
      color: 'from-green-600 to-teal-600'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'We focus on delivering measurable impact and value for our customers and stakeholders.',
      color: 'from-orange-600 to-red-600'
    },
    {
      icon: Heart,
      title: 'People First',
      description: 'We prioritize the well-being and growth of our team members above all else.',
      color: 'from-pink-600 to-rose-600'
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: [
        { icon: Shield, title: 'Comprehensive Health Insurance', description: '100% premium coverage for employees and families' },
        { icon: Heart, title: 'Mental Health Support', description: 'Counseling services and wellness programs' },
        { icon: Coffee, title: 'Wellness Stipend', description: '$500 annual budget for fitness and wellness' }
      ]
    },
    {
      category: 'Work-Life Balance',
      items: [
        { icon: Globe, title: 'Remote-First Culture', description: 'Work from anywhere with flexible schedules' },
        { icon: Calendar, title: 'Unlimited PTO', description: 'Take the time you need to recharge' },
        { icon: Clock, title: 'Flexible Hours', description: 'Core hours with flexible start and end times' }
      ]
    },
    {
      category: 'Growth & Development',
      items: [
        { icon: BookOpen, title: 'Learning Budget', description: '$3,000 annual budget for courses and conferences' },
        { icon: Award, title: 'Career Development', description: 'Mentorship programs and growth planning' },
        { icon: TrendingUp, title: 'Internal Mobility', description: 'Opportunities to explore different roles and teams' }
      ]
    },
    {
      category: 'Financial Benefits',
      items: [
        { icon: DollarSign, title: 'Competitive Salary', description: 'Market-leading compensation packages' },
        { icon: Star, title: 'Equity Package', description: 'Stock options for all full-time employees' },
        { icon: Building, title: '401(k) Matching', description: 'Up to 6% company matching contribution' }
      ]
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    const matchesType = selectedType === 'All' || job.type === selectedType;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.team.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDepartment && matchesLocation && matchesType && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedDepartment, selectedLocation, selectedType, searchTerm]);

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      green: 'bg-green-600 hover:bg-green-700',
      orange: 'bg-orange-600 hover:bg-orange-700',
      indigo: 'bg-indigo-600 hover:bg-indigo-700',
      cyan: 'bg-cyan-600 hover:bg-cyan-700',
      teal: 'bg-teal-600 hover:bg-teal-700',
      yellow: 'bg-yellow-600 hover:bg-yellow-700'
    };
    return colors[color] || colors.blue;
  };

  const getIconBgColor = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      green: 'bg-green-100 text-green-600',
      orange: 'bg-orange-100 text-orange-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      cyan: 'bg-cyan-100 text-cyan-600',
      teal: 'bg-teal-100 text-teal-600',
      yellow: 'bg-yellow-100 text-yellow-600'
    };
    return colors[color] || colors.blue;
  };

    const handleGetStarted = () => {
      window.location.href = '/ContactUs';
    };
  const JobCard = ({ job }) => {
    const IconComponent = job.icon;
    const isExpanded = expandedJob === job.id;

    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Job Header */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 ${getIconBgColor(job.color)} rounded-lg flex items-center justify-center`}>
              <IconComponent className="w-6 h-6" />
            </div>
            <div className="flex items-center space-x-2">
              {job.urgent && (
                <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full">
                  Urgent Hiring
                </span>
              )}
              <span className="text-xs text-gray-500">{job.posted}</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
            {job.title}
          </h3>

          <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
            <div className="flex items-center">
              <Building className="w-4 h-4 mr-1" />
              <span>{job.team}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{job.location}</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {job.description}
          </p>

          {/* Job Meta */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
              <Clock className="w-3 h-3 mr-1" />
              {job.type}
            </span>
            <span className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              <DollarSign className="w-3 h-3 mr-1" />
              {job.salary}
            </span>
            <span className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              <Users className="w-3 h-3 mr-1" />
              {job.experience}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <span>{job.applicants} applicants</span>
            <span>Department: {job.department}</span>
          </div>
        </div>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="px-6 pb-4 border-t border-gray-100 pt-4">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                <ul className="space-y-2">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Responsibilities</h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <Target className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Benefits & Perks</h4>
              <div className="flex flex-wrap gap-2">
                {job.benefits.map((benefit, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="px-6 pb-6 flex items-center justify-between">
          <button
            onClick={() => setExpandedJob(isExpanded ? null : job.id)}
            className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span>{isExpanded ? 'Show Less' : 'View Details'}</span>
            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
          
          <button className={`${getColorClasses(job.color)} text-white px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center space-x-2 hover:shadow-lg`}>
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div >
        
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        

          
          <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex space-x-8">
              {[
                { id: 'jobs', label: 'Open Positions', count: filteredJobs.length },
                { id: 'culture', label: 'Culture & Values' },
                { id: 'benefits', label: 'Benefits & Perks' },
                { id: 'process', label: 'Hiring Process' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-semibold text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                  {tab.count !== undefined && (
                    <span className="ml-2 bg-blue-100 text-blue-600 py-0.5 px-2 rounded-full text-xs font-medium">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Jobs Tab */}
          {activeTab === 'jobs' && (
            <div>
              {/* Search and Filters */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="lg:col-span-2 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search jobs, teams, or keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept === 'All' ? 'All Departments' : dept}</option>
                    ))}
                  </select>

                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    {locations.map(location => (
                      <option key={location} value={location}>{location === 'All' ? 'All Locations' : location}</option>
                    ))}
                  </select>

                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type === 'All' ? 'All Types' : type}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600">
                    Showing {startIndex + 1}-{Math.min(startIndex + jobsPerPage, filteredJobs.length)} of {filteredJobs.length} positions
                  </span>
                  {(searchTerm || selectedDepartment !== 'All' || selectedLocation !== 'All' || selectedType !== 'All') && (
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedDepartment('All');
                        setSelectedLocation('All');
                        setSelectedType('All');
                      }}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              </div>

              {/* Job Listings */}
              {paginatedJobs.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {paginatedJobs.map(job => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </button>
                      
                      {[...Array(totalPages)].map((_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => setCurrentPage(i + 1)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium ${
                            currentPage === i + 1
                              ? 'bg-blue-600 text-white'
                              : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No positions found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search criteria or check back later for new opportunities.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedDepartment('All');
                      setSelectedLocation('All');
                      setSelectedType('All');
                    }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Culture Tab */}
          {activeTab === 'culture' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture & Values</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We're building more than just products – we're creating a culture where innovation thrives, 
                  people grow, and everyone can do their best work.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {companyValues.map((value, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow group">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>

              {/* Team Diversity Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Diversity & Inclusion</h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We're committed to building a diverse and inclusive workplace where everyone feels valued, 
                    respected, and empowered to contribute their unique perspectives.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
                    <div className="text-gray-600 text-sm">Women in Leadership</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">60+</div>
                    <div className="text-gray-600 text-sm">Nationalities</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
                    <div className="text-gray-600 text-sm">Employee Resource Groups</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                    <div className="text-gray-600 text-sm">Pay Equity</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits & Perks</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We offer comprehensive benefits and perks designed to support your health, 
                  well-being, and professional growth.
                </p>
              </div>

              <div className="space-y-12">
                {benefits.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <item.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hiring Process Tab */}
          {activeTab === 'process' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Hiring Process</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We've designed our hiring process to be transparent, efficient, and focused on finding 
                  the right fit for both you and our team.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Application Review',
                    description: 'We carefully review your application and resume to understand your background and experience.',
                    duration: '1-2 days'
                  },
                  {
                    step: '02',
                    title: 'Initial Screening',
                    description: 'A brief phone or video call with our recruiting team to discuss your interest and answer questions.',
                    duration: '30 minutes'
                  },
                  {
                    step: '03',
                    title: 'Technical Interview',
                    description: 'Role-specific interviews with team members to assess your skills and problem-solving abilities.',
                    duration: '1-2 hours'
                  },
                  {
                    step: '04',
                    title: 'Final Interview',
                    description: 'Meet with leadership and potential teammates to discuss culture fit and career goals.',
                    duration: '45 minutes'
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                    <span className="text-blue-600 text-xs font-medium">{step.duration}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Process?</h3>
                <p className="text-gray-600 mb-6">
                  We're here to help! Reach out to our recruiting team if you have any questions about 
                  our hiring process or specific role requirements.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Contact Recruiting Team
                </button>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 py-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Don't see the perfect role? We're always looking for exceptional talent. 
              Send us your resume and let's start a conversation about your future with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl">
                Submit Your Resume
              </button>
              <button onClick={handleGetStarted} className="border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;