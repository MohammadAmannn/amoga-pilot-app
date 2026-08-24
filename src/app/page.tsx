'use client'

import * as React from 'react'
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
  PageHeader,
  Button,
  StatusBadge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@mohdaman/ui'
import {
  LayoutDashboard,
  Users,
  Settings,
  ShieldCheck,
  CreditCard,
  Bell,
  Sparkles,
  Command,
} from 'lucide-react'

export default function SidebarDemoPage() {
  const navItems = [
    { title: 'Dashboard', icon: LayoutDashboard, isActive: true },
    { title: 'Users & Teams', icon: Users, badge: '12' },
    { title: 'Billing & Plans', icon: CreditCard },
    { title: 'Security', icon: ShieldCheck },
    { title: 'Settings', icon: Settings },
  ]

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-background">
        {/* 1. AmogaDS Sidebar */}
        <Sidebar collapsible="icon">
          {/* Header */}
          <SidebarHeader className="border-b px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Command className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-semibold">AmogaDS App</span>
                <span className="truncate text-xs text-muted-foreground">Enterprise v1.0.0</span>
              </div>
            </div>
          </SidebarHeader>

          {/* Navigation Content */}
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Platform</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        isActive={item.isActive}
                        tooltip={item.title}
                        className="cursor-pointer"
                      >
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary group-data-[collapsible=icon]:hidden">
                            {item.badge}
                          </span>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          {/* Footer */}
          <SidebarFooter className="border-t p-3">
            <div className="flex items-center gap-3 group-data-[collapsible=icon]:hidden">
              <div className="size-8 rounded-full bg-muted flex items-center justify-center font-medium text-xs">
                MA
              </div>
              <div className="flex flex-col text-xs leading-tight">
                <span className="font-medium text-foreground">Mohd Aman</span>
                <span className="text-muted-foreground">admin@amoga.io</span>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* 2. Main Content Inset */}
        <SidebarInset className="flex-1 p-6 space-y-6">
          {/* Top Bar with Sidebar Trigger */}
          <header className="flex items-center justify-between pb-4 border-b">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="cursor-pointer" />
              <div className="h-4 w-px bg-border" />
              <span className="text-sm font-medium text-muted-foreground">
                Dashboard / Overview
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Bell className="size-4 mr-1.5" /> Notifications
              </Button>
              <Button size="sm">
                <Sparkles className="size-4 mr-1.5" /> Upgrade Plan
              </Button>
            </div>
          </header>

          {/* Page Header */}
          <PageHeader
            title="System Dashboard"
            description="Testing full AmogaDS Sidebar, Tokens, and Components from @mohdaman/ui."
          />

          {/* Quick Metrics Grid */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Services
                </CardTitle>
                <StatusBadge status="success" dot pulse>
                  Operational
                </StatusBadge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24 / 24</div>
                <p className="text-xs text-muted-foreground mt-1">100% uptime this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Users
                </CardTitle>
                <StatusBadge status="info">Synchronized</StatusBadge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,429</div>
                <p className="text-xs text-muted-foreground mt-1">+12% from last week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Security Status
                </CardTitle>
                <StatusBadge status="warning" dot>
                  Review
                </StatusBadge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.4%</div>
                <p className="text-xs text-muted-foreground mt-1">2 pending policy updates</p>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
