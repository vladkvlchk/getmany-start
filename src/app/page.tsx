"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  CreditCard,
  Bell,
  Zap,
  MessageCircle,
  Hash,
  Slack,
  Building2,
  PiIcon as PipeIcon,
  BookOpen,
  CheckCircle2,
  Play,
  ChevronUp,
  ChevronDown,
  Eye,
  EyeOff,
  Settings2Icon,
  ArrowRightIcon,
  BookOpenIcon,
  CableIcon,
} from "lucide-react"

interface Task {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  buttonText: string
  completed: boolean
  category: "setup" | "integrations" | "learning"
  type: "connect" | "article" | "crm" | "other"
  iconColor: string
  iconBg: string
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Create Job Search",
      description: "Set up your first job search with custom filters",
      icon: <Search className="h-4 w-4" />,
      buttonText: "Create",
      completed: false,
      category: "setup",
      type: "other",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
    },
    {
      id: "2",
      title: "Configure Billing",
      description: "Add payment method and billing preferences",
      icon: <CreditCard className="h-4 w-4" />,
      buttonText: "Configure",
      completed: true,
      category: "setup",
      type: "other",
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-100",
    },
    {
      id: "3",
      title: "Get Job Notifications",
      description: "Enable notifications for new job matches",
      icon: <Bell className="h-4 w-4" />,
      buttonText: "Enable",
      completed: false,
      category: "setup",
      type: "other",
      iconColor: "text-amber-600",
      iconBg: "bg-amber-100",
    },
    {
      id: "4",
      title: "Enable Auto Top-Up",
      description: "Automatically add credits when balance is low",
      icon: <Zap className="h-4 w-4" />,
      buttonText: "Enable",
      completed: false,
      category: "setup",
      type: "other",
      iconColor: "text-yellow-600",
      iconBg: "bg-yellow-100",
    },
    {
      id: "5",
      title: "Connect Telegram",
      description: "Receive notifications in Telegram",
      icon: <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" fill="currentColor">
      <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
      </svg>,
      buttonText: "Connect",
      completed: false,
      category: "integrations",
      type: "connect",
      iconColor: "text-sky-600",
      iconBg: "bg-sky-100",
    },
    {
      id: "6",
      title: "Connect Discord",
      description: "Get updates in Discord server",
      icon: <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <path fill="#8c9eff" d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path>
      </svg>,
      buttonText: "Connect",
      completed: false,
      category: "integrations",
      type: "connect",
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-100",
    },
    {
      id: "7",
      title: "Connect Slack",
      description: "Integrate with Slack workspace",
      icon: <Slack className="h-4 w-4" />,
      buttonText: "Connect",
      completed: true,
      category: "integrations",
      type: "connect",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
    },
    {
      id: "8",
      title: "Connect HubSpot",
      description: "Sync opportunities with HubSpot CRM",
      icon: <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 489 511.8"><path fill="#FF7A59" fill-rule="nonzero" d="M375.25 168.45V107.5c16.43-7.68 26.97-24.15 27.08-42.29V63.8c0-25.95-21.05-46.99-47-46.99h-1.37c-25.95 0-46.99 21.04-46.99 46.99v1.41a46.985 46.985 0 0027.29 42.3v60.94c-23.13 3.53-44.98 13.18-63.19 27.84L103.88 66.16c1.19-4.29 1.83-8.73 1.89-13.17v-.11C105.77 23.68 82.09 0 52.88 0 23.68 0 0 23.68 0 52.88c0 29.18 23.64 52.85 52.81 52.89 9.17-.08 18.16-2.59 26.06-7.23l164.62 128.07a133.501 133.501 0 00-22.16 73.61c0 27.39 8.46 54.17 24.18 76.58l-50.06 50.06a43.926 43.926 0 00-12.43-1.81c-23.96 0-43.38 19.42-43.38 43.37 0 23.96 19.42 43.38 43.38 43.38 23.95 0 43.37-19.42 43.37-43.38v-.13a41.81 41.81 0 00-2.02-12.5l49.52-49.56a133.687 133.687 0 0081.54 27.78c73.76 0 133.57-59.81 133.57-133.57 0-66.05-48.3-122.2-113.61-132.06l-.14.07zm-20.39 200.4c-36.79-1.52-65.85-31.79-65.85-68.62 0-35.43 26.97-65.06 62.23-68.38h3.62c35.8 2.73 63.46 32.58 63.46 68.48 0 35.91-27.66 65.76-63.45 68.48l-.01.04zm0 0z"/></svg>,
      buttonText: "Connect",
      completed: false,
      category: "integrations",
      type: "crm",
      iconColor: "text-orange-600",
      iconBg: "bg-orange-100",
    },
    {
      id: "9",
      title: "Connect Pipedrive",
      description: "Create deals in Pipedrive automatically",
      icon: <PipeIcon className="h-4 w-4" />,
      buttonText: "Connect",
      completed: false,
      category: "integrations",
      type: "crm",
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
    },
    {
      id: "10",
      title: "Read Article 1: Getting Started",
      description: "Learn the basics of job searching",
      icon: <BookOpen className="h-4 w-4" />,
      buttonText: "Read",
      completed: false,
      category: "learning",
      type: "article",
      iconColor: "text-violet-600",
      iconBg: "bg-violet-100",
    },
    {
      id: "11",
      title: "Read Article 2: Advanced Filters",
      description: "Master advanced search filters",
      icon: <BookOpen className="h-4 w-4" />,
      buttonText: "Read",
      completed: true,
      category: "learning",
      type: "article",
      iconColor: "text-pink-600",
      iconBg: "bg-pink-100",
    },
    {
      id: "12",
      title: "Read Article 3: Integration Guide",
      description: "Complete guide to integrations",
      icon: <BookOpen className="h-4 w-4" />,
      buttonText: "Read",
      completed: false,
      category: "learning",
      type: "article",
      iconColor: "text-rose-600",
      iconBg: "bg-rose-100",
    },
  ])

  const [widgetVisible, setWidgetVisible] = useState(true)
  const [showCompleted, setShowCompleted] = useState(false)

  const completedTasks = tasks.filter((task) => task.completed).length
  const totalTasks = tasks.length
  const progressPercentage = Math.round((completedTasks / totalTasks) * 100)

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
  }

  const filteredTasks = showCompleted ? tasks : tasks.filter((task) => !task.completed)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Widget */}
      {widgetVisible && (
        <div className="">
          <div className="max-w-7xl mx-auto p-6 pb-0">
            <div className="flex items-center justify-between gap-6">
              {/* Title Section */}
              <div className="w-1/2">
                <p className="text-sm text-gray-600">👋 Welcome, Vladyslav Kovalchuk</p>
                <h1 className="text-2xl font-bold text-gray-900">Let's get started!</h1>
                <p className="text-sm text-gray-600 mt-2">Let's set up your account so you can start to get the most out of your insights. This page will stay available until you complete all the steps.</p>
                {/* Progress Section */}
                <div className="flex-1 mt-4 flex items-center space-x-4 flex-1 max-w-2xl">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Progress</span>
                      <Badge variant="secondary" className="text-xs">
                        {progressPercentage}%
                      </Badge>
                    </div>
                    <div className="w-full border-2 border-black rounded-md">
                      <Progress value={progressPercentage} className="h-2 bg-white" />
                    </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {completedTasks} of {totalTasks} completed
                      </p>
                  </div>
                </div>
              </div>

              {/* Video Section */}
              <div className="w-1/2 flex items-end space-x-4">
                <div className="w-160 h-80 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer">
                  <Play className="h-20 w-20 text-gray-400" />
                </div>
                {/* <div className="flex-1">
                  <h3 className="font-medium text-sm">Welcome Video</h3>
                  <p className="text-xs text-gray-500">3:24 introduction</p>
                </div> */}
                {/* <Button size="sm" variant="outline">
                  <Play className="h-3 w-3 mr-1" />
                  Watch
                </Button> */}
              </div>
            </div>


            <div className="mt-6 flex items-center justify-between gap-6">

              {/* Controls */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => setShowCompleted(!showCompleted)}
                  className="flex items-center space-x-2"
                >
                  {showCompleted ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                  <span className="hidden sm:inline">{showCompleted ? "Hide" : "Show"} Completed {!showCompleted && `(${completedTasks})`}</span>
                </Button>
                {/* <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setWidgetVisible(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <ChevronUp className="h-4 w-4" />
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Show Widget Button */}
      {/* {!widgetVisible && (
        <div className="sticky top-0 z-10">
          <div className="max-w-7xl mx-auto p-2">
            <Button variant="outline" size="sm" onClick={() => setWidgetVisible(true)} className="shadow-sm">
              <ChevronDown className="h-4 w-4 mr-2" />
              Show Getting Started
            </Button>
          </div>
        </div>
      )} */}

      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        {/* <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Getting Started</h1>
              <p className="text-gray-600">Complete these tasks to set up your job search platform</p>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowCompleted(!showCompleted)}
              className="flex items-center space-x-2"
            >
              {showCompleted ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{showCompleted ? "Hide" : "Show"} Completed</span>
            </Button>
          </div>
        </div> */}

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-12">
          {filteredTasks.map((task) => (
            <Card
              key={task.id}
              className={`transition-all duration-200 ${
                task.completed ? "bg-green-50 border-green-200" : "hover:shadow-md"
              }`}
            >
              <CardContent className="px-4">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`p-2 rounded-lg ${
                      task.completed ? "bg-green-100 text-green-600" : `${task.iconBg} ${task.iconColor}`
                    }`}
                  >
                    {task.completed ? <CheckCircle2 className="h-4 w-4" /> : task.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {task.category}
                  </Badge>
                </div>
                <div className="mb-3">
                  <h3
                    className={`font-medium text-sm mb-1 ${
                      task.completed ? "text-green-900 line-through" : "text-gray-900"
                    }`}
                  >
                    {task.title}
                  </h3>
                  <p className={`text-xs ${task.completed ? "text-green-600" : "text-gray-600"}`}>{task.description}</p>
                </div>
                <div className="flex gap-2">
                  {task.type === "connect" && (
                    <Button
                      onClick={() => toggleTask(task.id)}
                      variant={task.completed ? "outline" : "default"}
                      size="sm"
                      className={`flex-1 ${task.completed && 'text-orange-400 hover:text-red-500 hover:border-red-500'}`}
                    >
                      {task.completed ? "" : <CableIcon />}
                      {task.completed ? "Disconnect" : task.buttonText}
                    </Button>
                  )}

                  {task.type === "crm" && (
                    <>
                      {task.completed ? (
                        <>
                          <Button
                            onClick={() => toggleTask(task.id)}
                            variant="outline"
                            size="sm"
                            className={`flex-1 ${task.completed && 'text-red-300 hover:text-red-500 hover:border-red-500'}`}
                            >
                            {/* <CableIcon /> */}
                            Disconnect
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Settings2Icon />
                            Settings
                          </Button>
                        </>
                      ) : (
                        <Button onClick={() => toggleTask(task.id)} variant="default" size="sm" className="w-full">
                          <CableIcon />
                          {task.buttonText}
                        </Button>
                      )}
                    </>
                  )}

                  {task.type === "article" && (
                    <>
                      <Button
                        onClick={() => toggleTask(task.id)}
                        variant={task.completed ? "outline" : "default"}
                        size="sm"
                        className="flex-1"
                      >
                        {task.completed ? "Mark as Unread" : "Mark as Read"}
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        {/* <BookOpenIcon /> */}
                        Read
                        <ArrowRightIcon />
                      </Button>
                    </>
                  )}

                  {task.type === "other" && (
                    <Button
                      onClick={() => toggleTask(task.id)}
                      variant={task.completed ? "outline" : "default"}
                      size="sm"
                      className={"w-full"}
                    >
                      {task.completed ? "Completed" : task.buttonText}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="text-center py-12">
            <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">All tasks completed!</h3>
            <p className="text-gray-600">Great job! You've finished all your tasks.</p>
          </div>
        )}
      </div>
    </div>
  )
}
