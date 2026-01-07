import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Save, Upload, ArrowLeft, Image as ImageIcon, Briefcase, FileText, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Link } from "react-router-dom";

import { INITIAL_PORTFOLIO } from "@/data/portfolio";

const ADMIN_USER = "admin";
const ADMIN_PASS = "shendy2026";

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginForm, setLoginForm] = useState({ user: "", pass: "" });
    const [stats, setStats] = useState({
        experience: "9+",
        advertising: "9+",
        projects: "100+"
    });

    const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
    const [newProject, setNewProject] = useState({
        title: "",
        category: "branding",
        tag: "",
        image: ""
    });

    const [cvFile, setCvFile] = useState<string | null>(null);

    useEffect(() => {
        // Check session
        if (sessionStorage.getItem("admin-session") === "active") {
            setIsLoggedIn(true);
        }

        const fetchData = async () => {
            try {
                const statsRes = await fetch('/api/stats.php');
                if (statsRes.ok) {
                    const data = await statsRes.json();
                    if (data) {
                        setStats({
                            experience: data.experience,
                            advertising: data.advertising,
                            projects: data.projects
                        });
                        setCvFile(data.cv_filename);
                    }
                }

                const portfolioRes = await fetch('/api/portfolio.php');
                if (portfolioRes.ok) {
                    const data = await portfolioRes.json();
                    setPortfolioItems(data || []);
                }
            } catch (error) {
                console.error("Failed to fetch data:", error);
                toast.error("Database connection failed");
            }
        };

        fetchData();
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (loginForm.user === ADMIN_USER && loginForm.pass === ADMIN_PASS) {
            setIsLoggedIn(true);
            sessionStorage.setItem("admin-session", "active");
            toast.success("Welcome, Amr Shendy!");
        } else {
            toast.error("Invalid credentials.");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem("admin-session");
    };

    const saveStats = async () => {
        try {
            const response = await fetch('/api/stats.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(stats)
            });
            if (response.ok) toast.success("Statistics updated!");
        } catch (error) {
            toast.error("Failed to update stats");
        }
    };

    const addProject = async () => {
        if (!newProject.title || !newProject.image) {
            toast.error("Title and Image are required");
            return;
        }
        try {
            const response = await fetch('/api/portfolio.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProject)
            });
            if (response.ok) {
                const result = await response.json();
                setPortfolioItems([{ ...newProject, id: result.id }, ...portfolioItems]);
                setNewProject({ title: "", category: "branding", tag: "", image: "" });
                toast.success("Project added!");
            }
        } catch (error) {
            toast.error("Failed to add project");
        }
    };

    const deleteProject = async (id: string) => {
        try {
            const response = await fetch(`/api/portfolio.php?id=${id}`, { method: 'DELETE' });
            if (response.ok) {
                setPortfolioItems(portfolioItems.filter(item => item.id !== id));
                toast.success("Project removed");
            }
        } catch (error) {
            toast.error("Failed to remove project");
        }
    };

    const handleCVUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const response = await fetch('/api/stats.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ cv_filename: file.name })
                });
                if (response.ok) {
                    setCvFile(file.name);
                    toast.success("CV Link updated");
                }
            } catch (error) {
                toast.error("Failed to update CV");
            }
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4 font-space">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md bg-card border border-border/50 rounded-3xl p-8 space-y-6"
                >
                    <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                            <Briefcase className="w-8 h-8" />
                        </div>
                        <h1 className="text-2xl font-bold">Admin Login</h1>
                        <p className="text-muted-foreground text-sm font-light">Enter credentials to manage your studio</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground ml-1">Username</label>
                            <Input
                                value={loginForm.user}
                                onChange={(e) => setLoginForm({ ...loginForm, user: e.target.value })}
                                className="bg-white/[0.03] border-white/10 h-12 px-4"
                                placeholder="admin"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground ml-1">Password</label>
                            <Input
                                type="password"
                                value={loginForm.pass}
                                onChange={(e) => setLoginForm({ ...loginForm, pass: e.target.value })}
                                className="bg-white/[0.03] border-white/10 h-12 px-4"
                                placeholder="••••••••"
                            />
                        </div>
                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 font-bold mt-2">
                            Enter Studio
                        </Button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#000000] text-foreground p-4 sm:p-10 font-space overflow-x-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-16">
                    <div className="flex items-center gap-6">
                        <Button variant="ghost" size="icon" className="rounded-full bg-white/5" asChild>
                            <Link to="/">
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                        </Button>
                        <div>
                            <h1 className="text-3xl font-black tracking-tight">Studio <span className="text-primary italic">Admin</span></h1>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Internal Management System</p>
                        </div>
                    </div>
                    <Button variant="outline" className="border-white/10 hover:bg-red-500 hover:text-white transition-colors" onClick={handleLogout}>
                        Logout
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
                    <div className="space-y-10">
                        {/* Stats */}
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-card/30 border border-white/5 rounded-[2rem] p-8 backdrop-blur-3xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-2 bg-primary/10 rounded-lg"><BarChart3 className="w-5 h-5 text-primary" /></div>
                                <h2 className="text-xl font-bold">Quick Stats</h2>
                            </div>
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                {Object.entries(stats).map(([key, val]) => (
                                    <div key={key} className="space-y-3">
                                        <label className="text-[9px] uppercase tracking-widest text-muted-foreground ml-1">{key}</label>
                                        <Input
                                            value={val}
                                            onChange={(e) => setStats({ ...stats, [key]: e.target.value })}
                                            className="bg-black/40 border-white/5 text-sm h-10 px-3"
                                        />
                                    </div>
                                ))}
                            </div>
                            <Button onClick={saveStats} className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all">Save Changes</Button>
                        </motion.div>

                        {/* CV */}
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="bg-card/30 border border-white/5 rounded-[2rem] p-8 backdrop-blur-3xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-2 bg-primary/10 rounded-lg"><FileText className="w-5 h-5 text-primary" /></div>
                                <h2 className="text-xl font-bold">Curriculum Vitae</h2>
                            </div>

                            {cvFile && (
                                <div className="mb-8 p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-between group">
                                    <div className="flex items-center gap-4 leading-tight">
                                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center"><FileText className="w-6 h-6 text-primary" /></div>
                                        <div>
                                            <p className="text-sm font-bold truncate max-w-[150px]">{cvFile}</p>
                                            <p className="text-[10px] opacity-40">Active PDF File</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">Preview</Button>
                                </div>
                            )}

                            <div className="border-2 border-dashed border-white/5 rounded-3xl p-10 text-center space-y-6 bg-black/20">
                                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto transition-transform hover:scale-110">
                                    <Upload className="w-6 h-6 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Click to upload new CV</p>
                                    <p className="text-[10px] text-muted-foreground mt-2 font-light">PDF • DOCX • Maximum 10MB</p>
                                </div>
                                <input type="file" id="cv-up" className="hidden" onChange={handleCVUpload} accept=".pdf,.doc,.docx" />
                                <Button variant="secondary" className="bg-white/5 hover:bg-white/10" asChild>
                                    <label htmlFor="cv-up" className="cursor-pointer">Browse Files</label>
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="space-y-12">
                        {/* Add Project */}
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-card/30 border border-white/5 rounded-[2rem] p-8 backdrop-blur-3xl">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-primary/10 rounded-lg"><Plus className="w-5 h-5 text-primary" /></div>
                                    <h2 className="text-xl font-bold">New Creation</h2>
                                </div>
                                <Button variant="ghost" size="sm" className="text-[10px] uppercase opacity-40 hover:opacity-100" onClick={() => setNewProject({ title: "", category: "branding", tag: "", image: "" })}>Clear</Button>
                            </div>

                            <div className="space-y-6">
                                <div className="aspect-video bg-black/40 border border-dashed border-white/10 rounded-3xl overflow-hidden flex items-center justify-center relative group">
                                    {newProject.image ? (
                                        <>
                                            <img src={newProject.image} alt="Preview" className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all gap-4">
                                                <ImageIcon className="w-8 h-8 text-primary" />
                                                <p className="text-[10px] uppercase tracking-widest font-bold">Live Preview</p>
                                                <Button variant="ghost" className="text-red-500 mt-2 hover:bg-red-500/10" onClick={() => setNewProject({ ...newProject, image: "" })}>Remove Image</Button>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="text-center space-y-3 opacity-20">
                                            <ImageIcon className="w-12 h-12 mx-auto" />
                                            <p className="text-xs font-light">Project Image Preview</p>
                                        </div>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input placeholder="Project Title" value={newProject.title} onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} className="bg-black/40 border-white/5 h-12 px-4 text-sm" />
                                    <select className="bg-black/40 border border-white/5 rounded-md px-4 h-12 text-sm text-foreground focus:ring-1 focus:ring-primary outline-none" value={newProject.category} onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}>
                                        <option value="branding">Brand Identity</option>
                                        <option value="social">Social Media Ads</option>
                                        <option value="retouching">Retouching</option>
                                        <option value="kv">Key Visual (KvS)</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4">
                                    <Input placeholder="Tag (e.g. Identity, Layout)" value={newProject.tag} onChange={(e) => setNewProject({ ...newProject, tag: e.target.value })} className="bg-black/40 border-white/5 h-12 px-4 text-sm" />
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder="Image URL or Base64"
                                            value={newProject.image}
                                            onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                                            className="bg-black/40 border-white/5 h-12 px-4 text-sm w-full sm:min-w-[200px]"
                                        />
                                        <input
                                            type="file"
                                            id="project-img-up"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    const reader = new FileReader();
                                                    reader.onloadend = () => {
                                                        setNewProject({ ...newProject, image: reader.result as string });
                                                        toast.success("Image uploaded successfully");
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }}
                                        />
                                        <Button
                                            variant="outline"
                                            className="border-white/10 hover:bg-white/5 h-12 px-3"
                                            asChild
                                        >
                                            <label htmlFor="project-img-up" className="cursor-pointer">
                                                <ImageIcon className="w-4 h-4" />
                                            </label>
                                        </Button>
                                    </div>
                                </div>
                                <Button onClick={addProject} className="w-full bg-primary hover:bg-primary/90 text-white h-14 font-black shadow-lg shadow-primary/20">Publish to Portfolio</Button>
                            </div>
                        </motion.div>

                        {/* Recent Items List */}
                        <div className="space-y-6">
                            <h3 className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground ml-4">Managed Catalog</h3>
                            {portfolioItems.length === 0 ? (
                                <p className="text-xs text-muted-foreground italic ml-4 opacity-40">The library is currently empty...</p>
                            ) : (
                                <div className="grid grid-cols-1 gap-4">
                                    {portfolioItems.map((item) => (
                                        <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between bg-white/[0.02] border border-white/5 rounded-2xl p-4 hover:bg-white/[0.04] transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-xl bg-black border border-white/10 overflow-hidden shadow-2xl">
                                                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="leading-tight">
                                                    <p className="text-sm font-bold">{item.title}</p>
                                                    <p className="text-[9px] text-primary uppercase font-black tracking-widest mt-1">{item.category} • {item.tag}</p>
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-red-500 hover:bg-red-500/10 rounded-xl w-10 h-10" onClick={() => deleteProject(item.id)}>
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
